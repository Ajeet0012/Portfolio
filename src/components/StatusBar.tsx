import { GitBranch, XCircle, AlertTriangle, CheckCheck, Bell } from 'lucide-react';

const StatusBar = () => {
  return (
    <div
      style={{
        height: '22px',
        backgroundColor: '#007acc',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
        fontSize: '12px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        zIndex: 100
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <GitBranch size={12} />
          <span>master*</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <XCircle size={12} /> 0
          <AlertTriangle size={12} style={{ marginLeft: '4px' }} /> 0
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ cursor: 'pointer' }}>UTF-8</div>
        <div style={{ cursor: 'pointer' }}>CRLF</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <span>{'{ }'}</span> TypeScript React
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <CheckCheck size={14} /> Prettier
        </div>
        <div style={{ cursor: 'pointer' }}>
          <Bell size={12} />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
