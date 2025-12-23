// Data for the Security Matrix
const securityMatrix = [
  {
    category: "Detection & Response",
    skills: [
      "Splunk / SIEM Optimization",
      "OSQuery & Fleet",
      "Zeek / Corelight",
      "CrowdStrike & SentinelOne",
      "BTL / Incident Triage",
    ],
  },
  {
    category: "Trusted & Confidential Compute",
    skills: [
      "AWS Nitro Enclaves",
      "OCI Confidential Computing",
      "TEE Attestation Flows",
      "MPC / ZK Primitives",
      "Hardware Security Keys",
    ],
  },
  {
    category: "Infrastructure & Orchestration",
    skills: [
      "Kubernetes Security",
      "Terraform / IaC",
      "Nginx / Traffic Safety",
      "Multi-Cloud (AWS, Azure, OCI)",
      "PostgreSQL Stability",
    ],
  },
  {
    category: "Languages & Core Ops",
    skills: [
      "Python (Automation/ML)",
      "Go (Systems)",
      "Rust (Safety)",
      "Bash / Unix Mastery",
      "Staff-Level Leadership",
    ],
  },
];

// Initialize the Matrix Grid
function renderMatrix() {
  const grid = document.getElementById("matrix-grid");
  securityMatrix.forEach((item) => {
    const card = document.createElement("div");
    card.className = "skill-category";
    card.innerHTML = `
            <h4>${item.category}</h4>
            <ul class="skill-list">
                ${item.skills.map((skill) => `<li>${skill}</li>`).join("")}
            </ul>
        `;
    grid.appendChild(card);
  });
}

// Render MTTR Chart (Simple SVG)
function renderMTTRChart() {
  const container = document.getElementById("mttr-chart");
  const svg = `
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
            <!-- Background Grid -->
            <line x1="0" y1="180" x2="400" y2="180" stroke="#222" stroke-width="1" />
            <line x1="0" y1="40" x2="400" y2="40" stroke="#222" stroke-width="1" />
            
            <!-- Before Bar -->
            <rect x="80" y="40" width="60" height="140" fill="var(--accent-purple-glow)" stroke="var(--accent-purple)" stroke-width="1">
                <animate attributeName="height" from="0" to="140" dur="1s" fill="freeze" />
                <animate attributeName="y" from="180" to="40" dur="1s" fill="freeze" />
            </rect>
            <text x="110" y="30" fill="var(--text-secondary)" text-anchor="middle" font-family="var(--mono-font)" font-size="12">PRE-OPTIMIZATION</text>
            
            <!-- After Bar -->
            <rect x="260" y="149" width="60" height="31" fill="var(--accent-teal-glow)" stroke="var(--accent-teal)" stroke-width="1">
                <animate attributeName="height" from="0" to="31" dur="1.2s" fill="freeze" />
                <animate attributeName="y" from="180" to="149" dur="1.2s" fill="freeze" />
            </rect>
            <text x="290" y="139" fill="var(--accent-teal)" text-anchor="middle" font-family="var(--mono-font)" font-size="12">-78.2% MTTR</text>
            
            <!-- Baseline -->
            <line x1="0" y1="180" x2="400" y2="180" stroke="var(--border-color)" stroke-width="2" />
        </svg>
    `;
  container.innerHTML = svg;
}

// Render Detection Matrix (Heatmap style)
function renderCoverageMatrix() {
  const container = document.getElementById("coverage-matrix");
  let cells = "";
  const rows = 10;
  const cols = 20;

  for (let i = 0; i < rows * cols; i++) {
    const opacity = Math.random() * 0.8 + 0.2;
    const color =
      Math.random() > 0.5 ? "var(--accent-teal)" : "var(--accent-purple)";
    cells += `<div style="background: ${color}; opacity: ${opacity}; border: 1px solid #000; border-radius: 2px;"></div>`;
  }

  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  container.innerHTML = cells;
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderMatrix();
  renderMTTRChart();
  renderCoverageMatrix();
  console.log("Operational Excellence Dashboard Initialized.");
});
