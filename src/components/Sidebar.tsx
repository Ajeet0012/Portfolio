import { ChevronDown, FileJson, FileCode2, FileText, Search as SearchIcon, Github, Puzzle } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeActivityBar: string;
}

const fileMap = [
  { id: 'hero', label: 'hero.tsx', icon: FileCode2, color: '#519aba' },
  { id: 'about', label: 'about.tsx', icon: FileCode2, color: '#519aba' },
  { id: 'skills', label: 'skills.json', icon: FileJson, color: '#cbcb41' },
  { id: 'projects', label: 'projects.ts', icon: FileCode2, color: '#519aba' },
  { id: 'education', label: 'education.json', icon: FileJson, color: '#cbcb41' },
  { id: 'certificates', label: 'certificates.md', icon: FileText, color: '#519aba' },
  { id: 'contact', label: 'contact.tsx', icon: FileCode2, color: '#519aba' },
];

const Sidebar = ({ activeTab, setActiveTab, activeActivityBar }: SidebarProps) => {
  const renderContent = () => {
    switch (activeActivityBar) {
      case 'search':
        return (
          <div style={{ padding: '10px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#3c3c3c', border: '1px solid #4ec9b0', padding: '4px 8px', borderRadius: '2px' }}>
              <input type="text" placeholder="Search" style={{ backgroundColor: 'transparent', border: 'none', color: '#fff', fontSize: '12px', width: '100%', outline: 'none', fontFamily: "'JetBrains Mono', monospace" }} />
            </div>
            <p style={{ fontSize: '11px', color: '#777777', marginTop: '12px' }}>Search workspace...</p>
          </div>
        );
      case 'source_control':
        return (
          <div style={{ padding: '10px 20px' }}>
            <a href="https://github.com/Ajeet0012" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cccccc', textDecoration: 'none', fontSize: '12px' }}>
              <Github size={16} />
              Open GitHub Profile
            </a>
            <p style={{ fontSize: '11px', color: '#777777', marginTop: '12px' }}>No pending changes.</p>
          </div>
        );
      case 'extensions':
        return (
          <div style={{ padding: '10px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cccccc', fontSize: '12px', marginBottom: '12px' }}>
              <Puzzle size={16} />
              Installed (3)
            </div>
            <div style={{ fontSize: '11px', color: '#777777', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div>• Prettier - Code formatter</div>
              <div>• ESLint</div>
              <div>• Tailwind CSS IntelliSense</div>
            </div>
          </div>
        );
      case 'explorer':
      default:
        return (
          <>
            {/* Accordion Header */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px', 
                padding: '4px 10px', 
                cursor: 'pointer',
                fontWeight: 600,
                color: '#cccccc',
                fontSize: '11px',
                textTransform: 'uppercase'
              }}
            >
              <ChevronDown size={14} />
              PORTFOLIO
            </div>

            {/* File List */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {fileMap.map(file => {
                const Icon = file.icon;
                const isActive = activeTab === file.id;
                
                return (
                  <button
                    key={file.id}
                    onClick={() => setActiveTab(file.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 10px 4px 28px',
                      width: '100%',
                      background: isActive ? '#37373d' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: isActive ? '#ffffff' : '#cccccc',
                      fontSize: '13px',
                      fontFamily: "'JetBrains Mono', monospace",
                      transition: 'background-color 100ms, color 100ms'
                    }}
                    onMouseEnter={e => {
                      if (!isActive) e.currentTarget.style.backgroundColor = '#2a2d2e';
                    }}
                    onMouseLeave={e => {
                      if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <Icon size={14} style={{ color: file.color }} />
                    {file.label}
                  </button>
                )
              })}
            </div>
          </>
        );
    }
  };

  return (
    <div
      style={{
        width: '250px',
        height: '100%',
        backgroundColor: '#181818',
        borderRight: '1px solid #2b2b2b',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ padding: '12px 20px', fontSize: '11px', color: '#cccccc', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {activeActivityBar === 'search' ? 'Search' : activeActivityBar === 'source_control' ? 'Source Control' : activeActivityBar === 'extensions' ? 'Extensions' : 'Explorer'}
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidebar;
