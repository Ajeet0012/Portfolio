import { Files, Search, GitMerge, LayoutGrid, Settings, UserCircle } from 'lucide-react';

interface ActivityBarProps {
  activeActivityBar: string;
  setActiveActivityBar: (bar: string) => void;
}

const ActivityBar = ({ activeActivityBar, setActiveActivityBar }: ActivityBarProps) => {
  return (
    <div
      style={{
        width: '48px',
        height: '100%',
        backgroundColor: '#181818',
        borderRight: '1px solid #2b2b2b',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 0',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <button onClick={() => setActiveActivityBar('explorer')} className={`activity-icon-btn ${activeActivityBar === 'explorer' ? 'active' : ''}`} aria-label="Explorer">
          <Files size={24} style={{ color: activeActivityBar === 'explorer' ? '#ffffff' : '#777777' }} strokeWidth={1.5} />
        </button>
        <button onClick={() => setActiveActivityBar('search')} className={`activity-icon-btn ${activeActivityBar === 'search' ? 'active' : ''}`} aria-label="Search">
          <Search size={24} style={{ color: activeActivityBar === 'search' ? '#ffffff' : '#777777' }} strokeWidth={1.5} />
        </button>
        <button onClick={() => setActiveActivityBar('source_control')} className={`activity-icon-btn ${activeActivityBar === 'source_control' ? 'active' : ''}`} aria-label="Source Control">
          <GitMerge size={24} style={{ color: activeActivityBar === 'source_control' ? '#ffffff' : '#777777' }} strokeWidth={1.5} />
        </button>
        <button onClick={() => setActiveActivityBar('extensions')} className={`activity-icon-btn ${activeActivityBar === 'extensions' ? 'active' : ''}`} aria-label="Extensions">
          <LayoutGrid size={24} style={{ color: activeActivityBar === 'extensions' ? '#ffffff' : '#777777' }} strokeWidth={1.5} />
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <button className="activity-icon-btn" aria-label="Accounts">
          <UserCircle size={24} style={{ color: '#777777' }} strokeWidth={1.5} />
        </button>
        <button className="activity-icon-btn" aria-label="Settings">
          <Settings size={24} style={{ color: '#777777' }} strokeWidth={1.5} />
        </button>
      </div>
      
      <style>{`
        .activity-icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          transition: color 150ms;
        }
        .activity-icon-btn:hover svg {
          color: #ffffff !important;
        }
        .activity-icon-btn.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: #4ec9b0;
        }
      `}</style>
    </div>
  );
};

export default ActivityBar;
