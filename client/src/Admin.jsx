import { useState } from "react";

export default function Admin() {
  const [email, setEmail] = useState("admin@METech.com");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [leads, setLeads] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(e) {
    e.preventDefault();
    setMessage("Logging in...");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setToken(data.token);
      setMessage(`Welcome, ${data.user.name}`);
      await loadLeads(data.token);
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function loadLeads(authToken = token) {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/leads", {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not load leads");
      }

      setLeads(data);
      setMessage(`Loaded ${data.length} leads`);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id, status) {
    try {
      const response = await fetch(`http://localhost:5000/api/leads/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Update failed");
      }

      setLeads((previous) =>
        previous.map((lead) => (lead._id === id ? data : lead))
      );
      setMessage("Lead status updated");
    } catch (error) {
      setMessage(error.message);
    }
  }

  if (!token) {
    return (
      <main style={{ maxWidth: 420, margin: "60px auto", padding: 24 }}>
        <h1>ME Technologies Admin</h1>
        <p>Admin Login</p>
        <form onSubmit={login}>
          <label>Email</label>
          <input
            style={fieldStyle}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            style={fieldStyle}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button style={buttonStyle} type="submit">Login</button>
        </form>
        <p>{message}</p>
      </main>
    );
  }

  return (
    <main style={{ padding: 24, maxWidth: 1100, margin: "auto" }}>
      <h1>ME Technologies Admin Dashboard</h1>
      <p>Manage contact enquiries and their status.</p>
      <p>{message}</p>
      <button style={buttonStyle} onClick={() => loadLeads()}>
        {loading ? "Loading..." : "Refresh Leads"}
      </button>
      <button
        style={{ ...buttonStyle, marginLeft: 8 }}
        onClick={() => {
          setToken("");
          setPassword("");
          setLeads([]);
          setMessage("Logged out");
        }}
      >
        Logout
      </button>

      <h2>Contact Leads ({leads.length})</h2>
      {leads.length === 0 ? (
        <p>No leads found yet.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Name", "Email", "Phone", "Message", "Status"].map((item) => (
                  <th key={item} style={cellStyle}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead._id}>
                  <td style={cellStyle}>{lead.name}</td>
                  <td style={cellStyle}>{lead.email}</td>
                  <td style={cellStyle}>{lead.phone || "-"}</td>
                  <td style={cellStyle}>{lead.message}</td>
                  <td style={cellStyle}>
                    <select
                      value={lead.status || "new"}
                      onChange={(e) => updateStatus(lead._id, e.target.value)}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

const fieldStyle = {
  display: "block",
  width: "100%",
  padding: 10,
  margin: "8px 0 16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  padding: "10px 18px",
  marginTop: 12,
  cursor: "pointer",
};

const cellStyle = {
  border: "1px solid #ddd",
  padding: 10,
  textAlign: "left",
  verticalAlign: "top",
};