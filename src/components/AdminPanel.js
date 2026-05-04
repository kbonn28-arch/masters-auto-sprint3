import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  DollarSign,
  Settings,
  Save,
  Trash2,
  LogOut,
  Search,
} from "lucide-react";
import { loadMaintenancePlans, saveMaintenancePlans } from "../data/siteContent";

const AdminPanel = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  const [quotes, setQuotes] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [services, setServices] = useState([]);
  const [pricing, setPricing] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
loadMaintenancePlans().then((data) => {
  setPlans(Array.isArray(data) ? data : []);
});
    setQuotes([
      {
        id: 1,
        name: "John Doe",
        phone: "(530) 555-0123",
        email: "john@example.com",
        vehicle: "Medium SUV",
        packageName: "Full Detail",
        preferredDate: "2026-04-24",
        notes: "Looking to clean up the vehicle before a trip.",
        status: "Pending",
      },
      {
        id: 2,
        name: "Sarah Smith",
        phone: "(530) 555-0456",
        email: "sarah@example.com",
        vehicle: "Small Sedan",
        packageName: "Basic Detail",
        preferredDate: "2026-04-21",
        notes: "Interested in adding headlight restoration.",
        status: "Contacted",
      },
    ]);

    setSubscriptions([
      {
        id: 1,
        name: "Michael Johnson",
        email: "michael@example.com",
        phone: "(530) 555-0789",
        plan: "Professional Care",
        vehicleInfo: "2022 Honda CR-V",
        status: "Active",
      },
      {
        id: 2,
        name: "Lisa Chen",
        email: "lisa@example.com",
        phone: "(530) 555-0234",
        plan: "Premium Care",
        vehicleInfo: "2021 BMW X5",
        status: "Pending",
      },
    ]);

    setServices([
      {
        id: 1,
        name: "Basic Detail",
        description:
          "Inside-and-out refresh with hand wash, wax, interior wipe down, windows, and vacuuming.",
      },
      {
        id: 2,
        name: "Full Detail",
        description:
          "A deeper restoration package with wash, clay bar treatment, polish, and protection.",
      },
      {
        id: 3,
        name: "Ceramic Coating",
        description:
          "Long-term gloss, protection, and easier maintenance for customers who want more than wax.",
      },
    ]);

    setPricing([
      { size: "Extra Small", basic: 159, full: 359 },
      { size: "Small", basic: 195, full: 395 },
      { size: "Medium", basic: 249, full: 449 },
      { size: "Large", basic: 339, full: 539 },
      { size: "Extra Large", basic: 429, full: 629 },
    ]);
  }, []);

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "quotes", label: "Quotes", icon: MessageSquare },
    { id: "subscriptions", label: "Members", icon: Users },
    { id: "pricing", label: "Pricing", icon: DollarSign },
    { id: "services", label: "Services", icon: Settings },
    { id: "maintenance", label: "Maintenance Club", icon: Settings },
  ];

  const filteredQuotes = quotes.filter((quote) =>
    `${quote.name} ${quote.email} ${quote.packageName} ${quote.vehicle}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const filteredSubscriptions = subscriptions.filter((sub) =>
    `${sub.name} ${sub.email} ${sub.plan} ${sub.vehicleInfo}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const updateQuoteStatus = (id, status) => {
    setQuotes((prev) =>
      prev.map((quote) => (quote.id === id ? { ...quote, status } : quote))
    );
  };

  const deleteQuote = (id) => {
    const confirmed = window.confirm("Delete this quote request?");
    if (!confirmed) return;

    setQuotes((prev) => prev.filter((quote) => quote.id !== id));
  };

  const updateSubscriptionStatus = (id, status) => {
    setSubscriptions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, status } : sub))
    );
  };

  const updateServiceField = (id, field, value) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id ? { ...service, [field]: value } : service
      )
    );
  };

  const updatePricingField = (size, field, value) => {
    setPricing((prev) =>
      prev.map((item) =>
        item.size === size ? { ...item, [field]: Number(value) || 0 } : item
      )
    );
  };

  const updatePlanField = (index, field, value) => {
    const updated = [...plans];
    updated[index] = { ...updated[index], [field]: value };
    setPlans(updated);
  };

  const updatePlanFeature = (planIndex, featureIndex, value) => {
    const updated = [...plans];
    const updatedFeatures = [...updated[planIndex].features];
    updatedFeatures[featureIndex] = value;
    updated[planIndex] = {
      ...updated[planIndex],
      features: updatedFeatures,
    };
    setPlans(updated);
  };

  const addPlanFeature = (planIndex) => {
    const updated = [...plans];
    updated[planIndex] = {
      ...updated[planIndex],
      features: [...updated[planIndex].features, "New Feature"],
    };
    setPlans(updated);
  };

  const removePlanFeature = (planIndex, featureIndex) => {
    const updated = [...plans];
    updated[planIndex] = {
      ...updated[planIndex],
      features: updated[planIndex].features.filter((_, i) => i !== featureIndex),
    };
    setPlans(updated);
  };

  const handleSavePlans = () => {
    saveMaintenancePlans(plans);
    alert("Maintenance Club updates saved.");
  };

  const handleSaveChanges = () => {
    alert(
      "Demo admin panel only: your changes are updated in the page state right now. Next step would be connecting this to your backend or CMS."
    );
  };

  const stats = [
    {
      label: "Quote Requests",
      value: quotes.length,
      color: "#60a5fa",
    },
    {
      label: "Maintenance Members",
      value: subscriptions.length,
      color: "#f87171",
    },
    {
      label: "Service Packages",
      value: services.length,
      color: "#86efac",
    },
    {
      label: "Pricing Rows",
      value: pricing.length,
      color: "#facc15",
    },
  ];

  return (
    <div style={pageStyle}>
      <div style={topBarStyle}>
        <div style={topBarInnerStyle}>
          <div style={brandWrapStyle}>
            <div style={logoStyle}>M</div>
            <div>
              <div style={brandTitleStyle}>Master&apos;s Auto Detail Admin</div>
              <div style={brandSubStyle}>Owner Dashboard</div>
            </div>
          </div>

          <button onClick={onLogout} style={logoutButtonStyle}>
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      <div style={layoutStyle} className="admin-layout-stack">
        <aside style={sidebarStyle}>
          <div style={sidebarCardStyle}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  ...sidebarButtonStyle,
                  ...(activeTab === tab.id ? activeSidebarButtonStyle : {}),
                }}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          <div style={sidebarCardStyle}>
            <div style={searchWrapStyle}>
              <Search size={16} color="#9ca3af" />
              <input
                type="text"
                placeholder="Search quotes or members"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={searchInputStyle}
              />
            </div>
          </div>

          <button
            onClick={activeTab === "maintenance" ? handleSavePlans : handleSaveChanges}
            style={saveAllButtonStyle}
          >
            <Save size={18} />
            Save Changes
          </button>
        </aside>

        <main style={mainStyle}>
          {activeTab === "dashboard" && (
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
              <h2 style={sectionTitleStyle}>Dashboard Overview</h2>

              <div style={statsGridStyle}>
                {stats.map((stat) => (
                  <div key={stat.label} style={statCardStyle}>
                    <div style={{ ...statDotStyle, background: stat.color }} />
                    <div style={statValueStyle}>{stat.value}</div>
                    <div style={statLabelStyle}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <div style={dashboardGridStyle}>
                <div style={panelStyle}>
                  <h3 style={panelTitleStyle}>Recent Quote Requests</h3>
                  <div style={miniListStyle}>
                    {quotes.map((quote) => (
                      <div key={quote.id} style={miniListCardStyle}>
                        <div style={miniListTitleStyle}>{quote.name}</div>
                        <div style={miniListTextStyle}>
                          {quote.packageName} • {quote.vehicle}
                        </div>
                        <div style={statusBadge(quote.status)}>{quote.status}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={panelStyle}>
                  <h3 style={panelTitleStyle}>Maintenance Club Signups</h3>
                  <div style={miniListStyle}>
                    {subscriptions.map((sub) => (
                      <div key={sub.id} style={miniListCardStyle}>
                        <div style={miniListTitleStyle}>{sub.name}</div>
                        <div style={miniListTextStyle}>
                          {sub.plan} • {sub.vehicleInfo}
                        </div>
                        <div style={statusBadge(sub.status)}>{sub.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "quotes" && (
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
              <h2 style={sectionTitleStyle}>Quote Requests</h2>

              <div style={stackStyle}>
                {filteredQuotes.map((quote) => (
                  <div key={quote.id} style={panelStyle}>
                    <div style={rowBetweenStyle}>
                      <div>
                        <h3 style={itemTitleStyle}>{quote.name}</h3>
                        <p style={mutedTextStyle}>
                          {quote.packageName} • {quote.vehicle}
                        </p>
                      </div>
                      <div style={statusBadge(quote.status)}>{quote.status}</div>
                    </div>

                    <div style={detailsGridStyle}>
                      <div style={detailBlockStyle}>
                        <span style={detailLabelStyle}>Phone</span>
                        <span style={detailValueStyle}>{quote.phone}</span>
                      </div>
                      <div style={detailBlockStyle}>
                        <span style={detailLabelStyle}>Email</span>
                        <span style={detailValueStyle}>{quote.email}</span>
                      </div>
                      <div style={detailBlockStyle}>
                        <span style={detailLabelStyle}>Preferred Date</span>
                        <span style={detailValueStyle}>{quote.preferredDate}</span>
                      </div>
                      <div style={detailBlockStyle}>
                        <span style={detailLabelStyle}>Notes</span>
                        <span style={detailValueStyle}>{quote.notes}</span>
                      </div>
                    </div>

                    <div style={actionRowStyle}>
                      <button
                        onClick={() => updateQuoteStatus(quote.id, "Pending")}
                        style={secondaryActionStyle}
                      >
                        Mark Pending
                      </button>
                      <button
                        onClick={() => updateQuoteStatus(quote.id, "Contacted")}
                        style={secondaryActionStyle}
                      >
                        Mark Contacted
                      </button>
                      <button
                        onClick={() => updateQuoteStatus(quote.id, "Closed")}
                        style={secondaryActionStyle}
                      >
                        Mark Closed
                      </button>
                      <button onClick={() => deleteQuote(quote.id)} style={dangerButtonStyle}>
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

                {filteredQuotes.length === 0 && (
                  <div style={emptyStateStyle}>No quote requests match your search.</div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === "subscriptions" && (
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
              <h2 style={sectionTitleStyle}>Maintenance Club Members</h2>

              <div style={stackStyle}>
                {filteredSubscriptions.map((sub) => (
                  <div key={sub.id} style={panelStyle}>
                    <div style={rowBetweenStyle}>
                      <div>
                        <h3 style={itemTitleStyle}>{sub.name}</h3>
                        <p style={mutedTextStyle}>
                          {sub.plan} • {sub.vehicleInfo}
                        </p>
                      </div>
                      <div style={statusBadge(sub.status)}>{sub.status}</div>
                    </div>

                    <div style={detailsGridStyle}>
                      <div style={detailBlockStyle}>
                        <span style={detailLabelStyle}>Phone</span>
                        <span style={detailValueStyle}>{sub.phone}</span>
                      </div>
                      <div style={detailBlockStyle}>
                        <span style={detailLabelStyle}>Email</span>
                        <span style={detailValueStyle}>{sub.email}</span>
                      </div>
                    </div>

                    <div style={actionRowStyle}>
                      <button
                        onClick={() => updateSubscriptionStatus(sub.id, "Pending")}
                        style={secondaryActionStyle}
                      >
                        Mark Pending
                      </button>
                      <button
                        onClick={() => updateSubscriptionStatus(sub.id, "Active")}
                        style={secondaryActionStyle}
                      >
                        Mark Active
                      </button>
                      <button
                        onClick={() => updateSubscriptionStatus(sub.id, "Paused")}
                        style={secondaryActionStyle}
                      >
                        Mark Paused
                      </button>
                    </div>
                  </div>
                ))}

                {filteredSubscriptions.length === 0 && (
                  <div style={emptyStateStyle}>No member records match your search.</div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === "pricing" && (
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
              <h2 style={sectionTitleStyle}>Pricing Editor</h2>

              <div style={panelStyle}>
                <p style={mutedTextStyle}>
                  Update visible starting prices by vehicle size. This is the owner-facing
                  control area for pricing edits.
                </p>

                <div style={pricingTableWrapStyle}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Vehicle Size</th>
                        <th style={thStyle}>Basic Detail</th>
                        <th style={thStyle}>Full Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricing.map((row) => (
                        <tr key={row.size}>
                          <td style={tdLabelStyle}>{row.size}</td>
                          <td style={tdStyle}>
                            <input
                              type="number"
                              value={row.basic}
                              onChange={(e) =>
                                updatePricingField(row.size, "basic", e.target.value)
                              }
                              style={tableInputStyle}
                            />
                          </td>
                          <td style={tdStyle}>
                            <input
                              type="number"
                              value={row.full}
                              onChange={(e) =>
                                updatePricingField(row.size, "full", e.target.value)
                              }
                              style={tableInputStyle}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "services" && (
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
              <h2 style={sectionTitleStyle}>Service Content</h2>

              <div style={stackStyle}>
                {services.map((service) => (
                  <div key={service.id} style={panelStyle}>
                    <div style={fieldGroupStyle}>
                      <label style={fieldLabelStyle}>Service Name</label>
                      <input
                        type="text"
                        value={service.name}
                        onChange={(e) =>
                          updateServiceField(service.id, "name", e.target.value)
                        }
                        style={fieldInputStyle}
                      />
                    </div>

                    <div style={fieldGroupStyle}>
                      <label style={fieldLabelStyle}>Description</label>
                      <textarea
                        value={service.description}
                        onChange={(e) =>
                          updateServiceField(service.id, "description", e.target.value)
                        }
                        style={fieldTextareaStyle}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "maintenance" && (
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
              <h2 style={sectionTitleStyle}>Maintenance Club Editor</h2>

              <div style={stackStyle}>
                {plans.map((plan, index) => (
                  <div key={plan.id} style={panelStyle}>
                    <div style={fieldGroupStyle}>
                      <label style={fieldLabelStyle}>Plan Name</label>
                      <input
                        value={plan.name}
                        onChange={(e) => updatePlanField(index, "name", e.target.value)}
                        style={fieldInputStyle}
                      />
                    </div>

                    <div style={fieldGroupStyle}>
                      <label style={fieldLabelStyle}>Price</label>
                      <input
                        value={plan.price}
                        onChange={(e) => updatePlanField(index, "price", e.target.value)}
                        style={fieldInputStyle}
                      />
                    </div>

                    <div style={fieldGroupStyle}>
                      <label style={fieldLabelStyle}>Description</label>
                      <textarea
                        value={plan.description}
                        onChange={(e) =>
                          updatePlanField(index, "description", e.target.value)
                        }
                        style={fieldTextareaStyle}
                      />
                    </div>

                    <div style={fieldGroupStyle}>
                      <label style={fieldLabelStyle}>Features</label>

                      {plan.features.map((feature, fIndex) => (
                        <div key={fIndex} style={featureRowStyle}>
                          <input
                            value={feature}
                            onChange={(e) =>
                              updatePlanFeature(index, fIndex, e.target.value)
                            }
                            style={fieldInputStyle}
                          />
                          <button
                            onClick={() => removePlanFeature(index, fIndex)}
                            style={dangerButtonStyle}
                          >
                            Remove
                          </button>
                        </div>
                      ))}

                      <button onClick={() => addPlanFeature(index)} style={secondaryActionStyle}>
                        Add Feature
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={handleSavePlans} style={saveAllButtonStyle}>
                <Save size={18} />
                Save Maintenance Club Changes
              </button>
            </motion.div>
          )}
        </main>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .admin-layout-stack {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #030303 0%, #000000 100%)",
  color: "#fff",
};

const topBarStyle = {
  position: "sticky",
  top: 0,
  zIndex: 100,
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  background: "rgba(0,0,0,0.92)",
  backdropFilter: "blur(10px)",
};

const topBarInnerStyle = {
  maxWidth: "1360px",
  margin: "0 auto",
  padding: "16px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
};

const brandWrapStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const logoStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #ff2a2a 0%, #b30000 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "900",
  fontSize: "1.3rem",
  boxShadow: "0 14px 28px rgba(255, 0, 0, 0.22)",
};

const brandTitleStyle = {
  fontWeight: "800",
  fontSize: "1.05rem",
};

const brandSubStyle = {
  fontSize: "0.86rem",
  color: "#9ca3af",
  marginTop: "3px",
};

const logoutButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.03)",
  color: "#fff",
  borderRadius: "999px",
  padding: "12px 16px",
  cursor: "pointer",
  fontWeight: "700",
};

const layoutStyle = {
  maxWidth: "1360px",
  margin: "0 auto",
  padding: "24px 20px 40px",
  display: "grid",
  gridTemplateColumns: "280px 1fr",
  gap: "24px",
};

const sidebarStyle = {
  display: "grid",
  gap: "16px",
  alignSelf: "start",
  position: "sticky",
  top: "92px",
};

const sidebarCardStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "24px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "14px",
  display: "grid",
  gap: "10px",
};

const sidebarButtonStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  width: "100%",
  background: "transparent",
  border: "1px solid transparent",
  color: "#d1d5db",
  borderRadius: "16px",
  padding: "14px 14px",
  cursor: "pointer",
  fontWeight: "700",
  textAlign: "left",
};

const activeSidebarButtonStyle = {
  background: "rgba(239,68,68,0.10)",
  border: "1px solid rgba(239,68,68,0.18)",
  color: "#fff",
};

const searchWrapStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "#111111",
  borderRadius: "16px",
  padding: "12px 14px",
};

const searchInputStyle = {
  width: "100%",
  background: "transparent",
  border: "none",
  outline: "none",
  color: "#fff",
  fontSize: "0.95rem",
};

const saveAllButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  width: "100%",
  border: "none",
  borderRadius: "999px",
  padding: "16px 18px",
  background: "linear-gradient(135deg, #ff2a2a 0%, #c40000 100%)",
  color: "#fff",
  fontWeight: "800",
  cursor: "pointer",
  boxShadow: "0 16px 34px rgba(255, 0, 0, 0.22)",
};

const mainStyle = {
  display: "grid",
  gap: "20px",
};

const sectionTitleStyle = {
  fontSize: "2rem",
  fontWeight: "900",
  marginBottom: "16px",
};

const statsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "16px",
  marginBottom: "20px",
};

const statCardStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "24px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "22px",
};

const statDotStyle = {
  width: "12px",
  height: "12px",
  borderRadius: "999px",
  marginBottom: "14px",
};

const statValueStyle = {
  fontSize: "2rem",
  fontWeight: "900",
  marginBottom: "6px",
};

const statLabelStyle = {
  color: "#cbd5e1",
  fontSize: "0.95rem",
};

const dashboardGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
};

const panelStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "26px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "24px",
};

const panelTitleStyle = {
  fontSize: "1.2rem",
  fontWeight: "800",
  marginBottom: "14px",
};

const miniListStyle = {
  display: "grid",
  gap: "12px",
};

const miniListCardStyle = {
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.02)",
  padding: "16px",
};

const miniListTitleStyle = {
  fontWeight: "800",
  marginBottom: "4px",
};

const miniListTextStyle = {
  color: "#cbd5e1",
  fontSize: "0.93rem",
  marginBottom: "8px",
};

const stackStyle = {
  display: "grid",
  gap: "16px",
};

const rowBetweenStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  alignItems: "flex-start",
  marginBottom: "16px",
  flexWrap: "wrap",
};

const itemTitleStyle = {
  fontSize: "1.1rem",
  fontWeight: "800",
  marginBottom: "4px",
};

const mutedTextStyle = {
  color: "#9ca3af",
  lineHeight: 1.7,
  margin: 0,
};

const detailsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "14px",
  marginBottom: "16px",
};

const detailBlockStyle = {
  display: "grid",
  gap: "4px",
};

const detailLabelStyle = {
  color: "#fca5a5",
  fontSize: "0.82rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontWeight: "800",
};

const detailValueStyle = {
  color: "#e5e7eb",
  lineHeight: 1.7,
  fontSize: "0.95rem",
};

const actionRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const secondaryActionStyle = {
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.03)",
  color: "#fff",
  borderRadius: "999px",
  padding: "12px 16px",
  cursor: "pointer",
  fontWeight: "700",
};

const dangerButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid rgba(239,68,68,0.18)",
  background: "rgba(239,68,68,0.10)",
  color: "#fca5a5",
  borderRadius: "999px",
  padding: "12px 16px",
  cursor: "pointer",
  fontWeight: "700",
};

const emptyStateStyle = {
  border: "1px dashed rgba(255,255,255,0.12)",
  borderRadius: "22px",
  padding: "24px",
  color: "#9ca3af",
  textAlign: "center",
};

const pricingTableWrapStyle = {
  overflowX: "auto",
  marginTop: "16px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  minWidth: "560px",
};

const thStyle = {
  textAlign: "left",
  color: "#fca5a5",
  fontSize: "0.84rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  padding: "14px 12px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};

const tdStyle = {
  padding: "14px 12px",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const tdLabelStyle = {
  padding: "14px 12px",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  fontWeight: "800",
  color: "#fff",
};

const tableInputStyle = {
  width: "100%",
  background: "#111111",
  border: "1px solid #262626",
  borderRadius: "12px",
  padding: "12px 14px",
  color: "#fff",
  outline: "none",
};

const fieldGroupStyle = {
  display: "grid",
  gap: "8px",
  marginBottom: "16px",
};

const fieldLabelStyle = {
  color: "#fca5a5",
  fontSize: "0.84rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontWeight: "800",
};

const fieldInputStyle = {
  width: "100%",
  background: "#111111",
  border: "1px solid #262626",
  borderRadius: "14px",
  padding: "14px 16px",
  color: "#fff",
  outline: "none",
  fontSize: "0.96rem",
};

const fieldTextareaStyle = {
  width: "100%",
  minHeight: "110px",
  background: "#111111",
  border: "1px solid #262626",
  borderRadius: "14px",
  padding: "14px 16px",
  color: "#fff",
  outline: "none",
  fontSize: "0.96rem",
  resize: "vertical",
  lineHeight: 1.7,
};

const featureRowStyle = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "10px",
  alignItems: "center",
};

const statusBadge = (status) => ({
  display: "inline-flex",
  alignItems: "center",
  width: "fit-content",
  padding: "8px 12px",
  borderRadius: "999px",
  fontWeight: "800",
  fontSize: "0.8rem",
  background:
    status === "Pending"
      ? "rgba(250,204,21,0.12)"
      : status === "Contacted" || status === "Active"
      ? "rgba(52,211,153,0.12)"
      : status === "Closed"
      ? "rgba(96,165,250,0.12)"
      : "rgba(255,255,255,0.06)",
  color:
    status === "Pending"
      ? "#fde68a"
      : status === "Contacted" || status === "Active"
      ? "#86efac"
      : status === "Closed"
      ? "#93c5fd"
      : "#e5e7eb",
});

export default AdminPanel;