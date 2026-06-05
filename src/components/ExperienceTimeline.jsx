import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Map as MapIcon,
  Maximize2,
  Minus,
  MonitorSmartphone,
  Plus,
  Presentation,
  RotateCcw,
  Smartphone,
  Star,
  Table2,
  Users,
  Workflow,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { skillGroups } from '../data/portfolioData.js';
import SkillChip from './SkillChip.jsx';

const START_YEAR = 2004;
const END_YEAR = 2026;
const BASE_PX_PER_MONTH = 58;
const CARD_WIDTH = 250;
const MIN_ZOOM = 0.72;
const MAX_ZOOM = 1.18;
const ZOOM_STEP = 0.08;

const toMonthIndex = (dateString) => {
  const date = new Date(`${dateString}T00:00:00`);
  return Math.max(0, (date.getFullYear() - START_YEAR) * 12 + date.getMonth());
};

const formatRange = (start, end) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  });
  return `${formatter.format(new Date(`${start}T00:00:00`))} - ${formatter.format(
    new Date(`${end}T00:00:00`)
  )}`;
};

const formatLongRange = (start, end) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  });
  return `${formatter.format(new Date(`${start}T00:00:00`))} - ${formatter.format(
    new Date(`${end}T00:00:00`)
  )}`;
};

const skillIconMap = new Map([
  ...skillGroups.flatMap((group) => group.skills.map((skill) => [skill.name, skill.icon])),
  ['Authentication', Workflow],
  ['SQL Server', Database],
  ['T-SQL', Database],
  ['ETL', Workflow],
  ['APIs', Workflow],
  ['ArcGIS', MapIcon],
  ['Data Modeling', Database],
  ['Geospatial Logic', MapIcon],
  ['Data Export', Database],
  ['AI Simulation', BrainCircuit],
  ['Behavior Trees', Workflow],
  ['GIS', MapIcon],
  ['Figma', Presentation],
  ['Product Thinking', BrainCircuit],
  ['UX Analysis', MonitorSmartphone],
  ['Teaching', Users],
  ['Project Review', BookOpen],
  ['Communication', Users],
  ['Xcode', Code2],
  ['iOS Development', Smartphone],
  ['Storyboard', MonitorSmartphone],
  ['Keras', BrainCircuit],
  ['Time Series', BrainCircuit],
  ['Machine Learning', BrainCircuit],
  ['Sensors', MonitorSmartphone],
  ['OSHA Compliance', Workflow],
  ['Computer Science', GraduationCap],
  ['Software Engineering', Code2],
  ['Data Structures and Algorithms', Workflow],
  ['Algorithmic Design', BrainCircuit],
  ['Computer Architecture', MonitorSmartphone],
  ['Operating Systems', MonitorSmartphone],
  ['Information Systems', Database],
  ['Discrete Mathematics', BrainCircuit],
  ['Linear Algebra', BrainCircuit],
  ['Artificial Intelligence', BrainCircuit],
  ['Systems Programming', Code2],
  ['Matplotlib', Table2],
  ['Data Visualization', Table2],
  ['Research', BookOpen],
]);

function assignTimelineLayout(items, pxPerMonth) {
  const sideLaneEnds = {
    top: [],
    bottom: [],
  };
  const visualCardMonths = Math.ceil(CARD_WIDTH / pxPerMonth);
  let experienceIndex = 0;

  return [...items]
    .sort((a, b) => toMonthIndex(a.start) - toMonthIndex(b.start))
    .map((item) => {
      const start = toMonthIndex(item.start);
      const end = Math.max(start + 1, toMonthIndex(item.end));
      const nonWorkSide = item.type === 'personal' ? 'top' : 'bottom';

      if (item.type !== 'experience') {
        return {
          ...item,
          startIndex: start,
          endIndex: end,
          side: nonWorkSide,
          level: 0,
        };
      }

      const visualEnd = start + visualCardMonths;
      const preferredSide =
        experienceIndex % 2 === 0
          ? 'top'
          : 'bottom';

      const findReusableLane = (side) =>
        sideLaneEnds[side].findIndex((laneEnd) => start > laneEnd + 1);

      let side = preferredSide;
      let level = findReusableLane(side);

      if (level === -1) {
        level = sideLaneEnds[side].length;
      }

      sideLaneEnds[side][level] = visualEnd;
      if (item.type === 'experience') {
        experienceIndex += 1;
      }

      return {
        ...item,
        startIndex: start,
        endIndex: end,
        side,
        level,
      };
    });
}

function ExperienceTimeline({ items }) {
  const scrollerRef = useRef(null);
  const detailRef = useRef(null);
  const cardRefs = useRef(new Map());
  const zoomCenterMonthRef = useRef(null);
  const [activeSlug, setActiveSlug] = useState(null);
  const [timelineZoom, setTimelineZoom] = useState(0.86);
  const pxPerMonth = Math.round(BASE_PX_PER_MONTH * timelineZoom);
  const totalMonths = (END_YEAR - START_YEAR + 1) * 12;
  const timelineWidth = totalMonths * pxPerMonth;
  const activeItem = items.find((item) => item.slug === activeSlug);
  const timelineItems = useMemo(
    () => items.filter((item) => item.type === 'experience' || item.type === 'education'),
    [items]
  );
  const milestoneItems = useMemo(
    () =>
      items
        .filter((item) => item.type === 'milestone')
        .map((item) => {
          const startIndex = toMonthIndex(`${item.date}-01`);
          return {
            ...item,
            startIndex: Math.min(totalMonths - 1, startIndex),
          };
        }),
    [items, totalMonths]
  );

  const years = useMemo(
    () => Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, index) => START_YEAR + index),
    []
  );

  const months = useMemo(
    () => Array.from({ length: totalMonths }, (_, index) => index),
    [totalMonths]
  );

  const laidOutItems = useMemo(
    () => assignTimelineLayout(timelineItems, pxPerMonth),
    [timelineItems, pxPerMonth]
  );
  const maxTopLevel = laidOutItems.reduce(
    (max, item) => (item.side === 'top' ? Math.max(max, item.level) : max),
    0
  );
  const maxBottomLevel = laidOutItems.reduce(
    (max, item) => (item.side === 'bottom' ? Math.max(max, item.level) : max),
    0
  );
  const laneGap = 96;
  const axisTop = 178 + maxTopLevel * laneGap;
  const timelineHeight = axisTop + 226 + maxBottomLevel * laneGap;

  const updateZoom = (direction) => {
    const scroller = scrollerRef.current;
    if (scroller) {
      zoomCenterMonthRef.current = (scroller.scrollLeft + scroller.clientWidth / 2) / pxPerMonth;
    }

    setTimelineZoom((current) => {
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, current + direction * ZOOM_STEP));
      return Number(next.toFixed(2));
    });
  };

  const scrollToToday = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const today = new Date();
    const todayIndex = Math.min(
      totalMonths - 1,
      Math.max(0, (today.getFullYear() - START_YEAR) * 12 + today.getMonth())
    );
    const target = Math.max(0, todayIndex * pxPerMonth - scroller.clientWidth + 340);
    scroller.scrollTo({ left: target, behavior: 'smooth' });
  };

  const scrollToRecentWork = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const recentStart = toMonthIndex('2024-01-01') * pxPerMonth;
    scroller.scrollTo({ left: recentStart, behavior: 'smooth' });
  };

  const nudgeTimeline = (direction) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollBy({ left: direction * scroller.clientWidth * 0.55, behavior: 'smooth' });
  };

  const openDetail = (slug) => {
    setActiveSlug(slug);
  };

  const closeDetail = () => {
    const slug = activeSlug;
    setActiveSlug(null);
    window.requestAnimationFrame(() => {
      scrollerRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'center',
      });
      cardRefs.current.get(slug)?.focus({ preventScroll: true });
    });
  };

  const handleTimelineBackgroundClick = (event) => {
    if (!activeSlug) return;
    if (event.target.closest('.timeline-event-card, .timeline-node, .timeline-milestone')) return;
    closeDetail();
  };

  useEffect(() => {
    const id = window.requestAnimationFrame(scrollToRecentWork);
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const centerMonth = zoomCenterMonthRef.current;
    if (!scroller || centerMonth === null) return undefined;

    const id = window.requestAnimationFrame(() => {
      scroller.scrollTo({
        left: Math.max(0, centerMonth * pxPerMonth - scroller.clientWidth / 2),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
      zoomCenterMonthRef.current = null;
    });

    return () => window.cancelAnimationFrame(id);
  }, [pxPerMonth]);

  useEffect(() => {
    if (!activeSlug) return;

    const id = window.setTimeout(() => {
      detailRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      });
    }, 120);

    return () => window.clearTimeout(id);
  }, [activeSlug]);

  return (
    <div className={`experience-timeline-shell ${activeItem ? 'has-detail' : ''}`}>
      <div
        className="experience-timeline"
        ref={scrollerRef}
        onClick={handleTimelineBackgroundClick}
        tabIndex="0"
      >
        <div
          className="timeline-canvas"
          style={{
            width: `${timelineWidth}px`,
            height: `${timelineHeight}px`,
            '--axis-top': `${axisTop}px`,
            '--timeline-height': `${timelineHeight}px`,
            '--lane-gap': `${laneGap}px`,
          }}
        >
          <div className="month-grid" aria-hidden="true">
            {months.map((month) => (
              <span
                className={month % 12 === 0 ? 'month-tick year-month' : 'month-tick'}
                key={month}
                style={{ left: `${month * pxPerMonth}px` }}
              />
            ))}
          </div>

          <div className="timeline-axis" aria-hidden="true" />

          <div className="year-labels" aria-hidden="true">
            {years.map((year) => (
              <span key={year} style={{ left: `${(year - START_YEAR) * 12 * pxPerMonth}px` }}>
                {year}
              </span>
            ))}
          </div>

          <ol className="timeline-events" aria-label="Experience timeline">
            {laidOutItems.map((item, index) => {
              const duration = Math.max(pxPerMonth, (item.endIndex - item.startIndex) * pxPerMonth);
              const isActive = item.slug === activeSlug;
              const detailLabel = `Open details for ${item.company} ${item.role}`;
              const handleInteractionKey = (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openDetail(item.slug);
                }
              };

              return (
                <li
                  className={`timeline-event is-${item.side} timeline-event-${index % 3} is-${item.type} ${
                    isActive ? 'is-active' : ''
                  }`}
                  key={item.slug}
                  style={{
                    left: `${item.startIndex * pxPerMonth}px`,
                    width: `${Math.max(duration, CARD_WIDTH)}px`,
                    '--duration-width': `${duration}px`,
                    '--level': item.level,
                  }}
                >
                  <span className="timeline-duration" aria-hidden="true" />
                  <span
                    aria-expanded={isActive}
                    aria-label={`${detailLabel} marker`}
                    className="timeline-node"
                    onClick={(event) => {
                      event.stopPropagation();
                      openDetail(item.slug);
                    }}
                    onKeyDown={handleInteractionKey}
                    role="button"
                    tabIndex="0"
                  >
                    {item.logoImage ? <img src={item.logoImage} alt="" /> : item.logo}
                  </span>
                  <span className="timeline-connector" aria-hidden="true" />
                  <article
                    aria-expanded={isActive}
                    aria-label={detailLabel}
                    className="timeline-event-card"
                    onClick={(event) => {
                      event.stopPropagation();
                      openDetail(item.slug);
                    }}
                    onKeyDown={handleInteractionKey}
                    ref={(node) => {
                      if (node) cardRefs.current.set(item.slug, node);
                    }}
                    role="button"
                    tabIndex="0"
                  >
                    <p>{formatRange(item.start, item.end)}</p>
                    <h3>{item.company}</h3>
                    <span>{item.role}</span>
                    <span className="timeline-expand-icon" aria-hidden="true">
                      <Maximize2 size={15} />
                    </span>
                  </article>
                </li>
              );
            })}
          </ol>

          <ol className="timeline-milestones" aria-label="Timeline milestones">
            {milestoneItems.map((item) => {
              const monthDate = new Date(`${item.date}-01T00:00:00`);
              const dateLabel = new Intl.DateTimeFormat('en-US', {
                month: 'short',
                year: 'numeric',
              }).format(monthDate);
              const isStart = item.startIndex === 0;
              const isEnd = item.startIndex >= totalMonths - 3;
              const labelContent = (
                <>
                  <span className="milestone-marker" aria-hidden="true">
                    <Star size={21} fill="currentColor" />
                  </span>
                  <span className="milestone-label">
                    <span>
                      <Star size={14} fill="currentColor" aria-hidden="true" />
                      {dateLabel}
                      {item.href ? <ArrowUpRight size={13} aria-hidden="true" /> : null}
                    </span>
                    <strong>{item.title}</strong>
                    {item.description ? <small>{item.description}</small> : null}
                  </span>
                </>
              );

              return (
                <li
                  className={`timeline-milestone ${item.href ? 'has-link' : ''} ${
                    isStart ? 'is-start' : ''
                  } ${isEnd ? 'is-end' : ''}`}
                  key={item.slug}
                  style={{ left: `${item.startIndex * pxPerMonth}px` }}
                  title={`${item.title}, ${dateLabel}`}
                >
                  {item.href ? (
                    <a href={item.href} aria-label={`${item.title}, ${dateLabel}`}>
                      {labelContent}
                    </a>
                  ) : (
                    <span aria-label={`${item.title}, ${dateLabel}`} role="img">
                      {labelContent}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <div className="timeline-bottom-controls">
        <button type="button" onClick={() => nudgeTimeline(-1)} aria-label="Scroll timeline left">
          <ArrowLeft size={17} />
        </button>
        <button type="button" onClick={() => nudgeTimeline(1)} aria-label="Scroll timeline right">
          <ArrowRight size={17} />
        </button>
        <button className="timeline-jump" type="button" onClick={scrollToToday}>
          <RotateCcw size={16} aria-hidden="true" />
          Today
        </button>
        <div className="timeline-zoom-controls" aria-label="Timeline zoom controls">
          <button
            type="button"
            onClick={() => updateZoom(-1)}
            aria-label="Zoom timeline out"
            disabled={timelineZoom <= MIN_ZOOM}
          >
            <Minus size={16} />
          </button>
          <span>{Math.round(timelineZoom * 100)}%</span>
          <button
            type="button"
            onClick={() => updateZoom(1)}
            aria-label="Zoom timeline in"
            disabled={timelineZoom >= MAX_ZOOM}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div
        className={`experience-detail-inline ${activeItem ? 'is-open' : ''}`}
        id="experience-detail-panel"
        ref={detailRef}
        aria-live="polite"
      >
        {activeItem ? (
          <article className="experience-detail-grid">
            <button className="detail-close-button" type="button" onClick={closeDetail} aria-label="Close details">
              <X size={17} aria-hidden="true" />
            </button>
            <aside className="detail-summary">
              <div className="detail-logo" aria-hidden="true">
                {activeItem.logoImage ? <img src={activeItem.logoImage} alt="" /> : activeItem.logo}
              </div>
              <p className="detail-date">{formatLongRange(activeItem.start, activeItem.end)}</p>
              <h3>{activeItem.company}</h3>
              <strong>{activeItem.role}</strong>
              {activeItem.location ? <span>{activeItem.location}</span> : null}
            </aside>

            <div className="detail-main">
              {activeItem.solvedFor ? (
                <section>
                  <p className="detail-label">What I Solved For</p>
                  <p>{activeItem.solvedFor}</p>
                </section>
              ) : null}
              <section>
                <p className="detail-label">
                  {activeItem.type === 'education' ? 'Education Highlights' : 'Work Highlights'}
                </p>
                <ul>
                  {activeItem.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="detail-skills">
              <p className="detail-label">
                {activeItem.type === 'education' ? 'Relevant Coursework' : 'Skills I Learned & Used'}
              </p>
              <div className="skill-list">
                {activeItem.skills.map((skill) => (
                  <SkillChip key={skill} name={skill} icon={skillIconMap.get(skill)} />
                ))}
              </div>
            </section>

            {activeItem.media?.length ? (
              <section className="detail-media">
                <p className="detail-label">Research Posters</p>
                <div className="detail-media-grid">
                  {activeItem.media.map((item) => (
                    <a href={item.href} key={item.title}>
                      <img src={item.preview} alt={`${item.title} preview`} />
                      <span>
                        <strong>{item.title}</strong>
                        <small>{item.type}</small>
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            ) : null}
          </article>
        ) : null}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
