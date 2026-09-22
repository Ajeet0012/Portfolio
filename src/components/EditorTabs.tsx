import { X } from 'lucide-react';

interface EditorTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openTabs: string[];
  onCloseTab: (tabId: string) => void;
}

const fileMap: Record<string, { label: string; color: string }> = {
  hero: { label: 'hero.tsx', color: '#519aba' },
  about: { label: 'about.tsx', color: '#519aba' },
  skills: { label: 'skills.json', color: '#cbcb41' },
  projects: { label: 'projects.ts', color: '#519aba' },
  education: { label: 'education.json', color: '#cbcb41' },
  certificates: { label: 'certificates.md', color: '#519aba' },
  contact: { label: 'contact.tsx', color: '#519aba' },
};

const EditorTabs = ({ activeTab, setActiveTab, openTabs, onCloseTab }: EditorTabsProps) => {
  return (
    <div style={{ display: 'flex', backgroundColor: '#181818', overflowX: 'auto', borderBottom: '1px solid #2b2b2b' }}>
      {openTabs.map(tabId => {
        const file = fileMap[tabId];
        const isActive = activeTab === tabId;
        
        return (
          <div
            key={tabId}
            onClick={() => setActiveTab(tabId)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: isActive ? '#000000' : '#2d2d2d',
              borderTop: isActive ? '1px solid #4ec9b0' : '1px solid transparent',
              borderRight: '1px solid #2b2b2b',
              color: isActive ? '#ffffff' : '#969696',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px',
              cursor: 'pointer',
              minWidth: '120px'
            }}
          >
            <span style={{ color: file?.color, fontWeight: 700 }}>{file?.label.split('.')[1]}</span>
            <span>{file?.label}</span>
            <X 
              size={14} 
              style={{ marginLeft: 'auto', color: '#777777', padding: '2px', borderRadius: '4px' }} 
              onClick={(e) => {
                e.stopPropagation();
                onCloseTab(tabId);
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            />
          </div>
        );
      })}
    </div>
  );
};

export default EditorTabs;
