'use client'

export default function Settings() {
  return (
    <div className="mainContent">
      <h1>Settings Page</h1>
      <p>This is a mock settings page created for demonstration purposes.</p>
      <div style={{ maxWidth: '80%', padding: '20px' }}>
        <section style={{ marginBottom: '30px' }}>
          <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
            <div style={{ marginBottom: '20px' }}>
              <h3>Email Notifications</h3>
              <label style={{ display: 'block', marginBottom: '10px' }}>
                <input type="checkbox" /> Receive email notifications for new messages
              </label>
              <label style={{ display: 'block', marginBottom: '10px' }}>
                <input type="checkbox" /> Receive email notifications for connection requests
              </label>
              <label style={{ display: 'block' }}>
                <input type="checkbox" /> Receive weekly digest emails
              </label>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3>Privacy</h3>
              <label style={{ display: 'block', marginBottom: '10px' }}>
                <input type="checkbox" /> Make profile visible to public
              </label>
              <label style={{ display: 'block' }}>
                <input type="checkbox" /> Show online status
              </label>
            </div>

            <div>
              <h3>Language</h3>
              <select style={{ padding: '8px', width: '200px' }}>
                <option value="en">English</option>
                <option value="ko">한국어</option>
                <option value="ja">日本語</option>
                <option value="zh">中文</option>
              </select>
            </div>
          </div>
        </section>

        <section>
          <h2>Danger Zone</h2>
          <div style={{ backgroundColor: '#fff8f8', padding: '20px', borderRadius: '8px', border: '1px solid #ffcdd2' }}>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#d32f2f' }}>Delete Account</h3>
              <p style={{ color: '#666' }}>Once you delete your account, there is no going back. Please be certain.</p>
              <button 
                style={{ 
                  backgroundColor: '#d32f2f',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                onClick={() => alert('This is a mock settings page. Account deletion is not available.')}
              >
                Delete Account
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}