import { useState, useEffect } from 'react'

const searchQueries = [
  {
    query: "best wood fired pizza near me stockton",
    keyword: "wood fired pizza",
    emoji: "\uD83C\uDF55",
    beforeResults: [
      { title: "Papapavlo's Bistro & Bar - Stockton, CA", url: "papapavlos.com", desc: "Authentic Mediterranean cuisine with wood-fired pizzas baked fresh daily. Margherita, pepperoni, and seasonal specials..." },
      { title: "Michael's Pizza - Wood Fired Pies | Stockton", url: "michaelspizzastockton.com", desc: "Family-owned pizzeria serving Stockton since 1998. Our wood-fired oven reaches 900 degrees for the perfect Neapolitan crust..." },
      { title: "Pietro's Italian Restaurant - Stockton CA", url: "pietrosstockton.com", desc: "Traditional Italian dining with our famous wood-fired pizza oven. Try our margherita, quattro formaggi, and diavola..." },
    ],
    afterResult: { title: "Market Tavern | Wood-Fired Neapolitan Pizza | Stockton, CA", url: "markettavernstk.com/menu/wood-fired-pizzas", desc: "Authentic Neapolitan-style pizza from our wood-burning oven. Margherita ($18), The Meat Lover with Hobbs salami ($24), Wild Mushroom with truffle oil ($22). Farm-fresh ingredients, baked at 900\u00B0F." },
  },
  {
    query: "best brisket sandwich near me",
    keyword: "brisket sandwich",
    emoji: "\uD83E\uDD69",
    beforeResults: [
      { title: "Smoked Out BBQ - Stockton, CA", url: "smokedoutbbqstockton.com", desc: "Slow-smoked Texas-style barbecue. Our 14-hour brisket is sliced fresh daily. Sandwiches, platters, and family packs..." },
      { title: "Cast Iron Trading Co. | BBQ & Comfort Food", url: "castirontradingco.com", desc: "Craft BBQ in downtown Stockton. Brisket, pulled pork, ribs and all the fixings. Award-winning smoked meats..." },
      { title: "Squeeze Burger - Stockton | Burgers & Sandwiches", url: "squeezeburger.com", desc: "Home of the famous squeeze burger. Also serving pulled pork and brisket sandwiches on fresh-baked buns..." },
    ],
    afterResult: { title: "Market Tavern | Brisket Sandwich | Stockton, CA", url: "markettavernstk.com/menu/burgers-sandwiches", desc: "12-hour smoked brisket, caramelized onions, horseradish cream, pickles, brioche bun. Served with fries ($22). Handcrafted with premium ingredients at Lincoln Center." },
  },
  {
    query: "best steak restaurant stockton ca",
    keyword: "steak restaurant",
    emoji: "\uD83E\uDD69",
    beforeResults: [
      { title: "Bud's Seafood Grille - Stockton, CA", url: "budsseafoodgrille.com", desc: "Fine dining in Stockton since 1985. Prime steaks, fresh seafood, and an extensive wine list. Reservations recommended..." },
      { title: "Black Bear Diner - Stockton | American Dining", url: "blackbeardiner.com/stockton", desc: "Hearty American meals including hand-cut steaks, burgers, and homestyle comfort food. Family-friendly atmosphere..." },
      { title: "Outback Steakhouse - Stockton", url: "outback.com/locations/ca/stockton", desc: "Bold flavors on the grill. Enjoy our signature steaks, ribs, and seafood. Bloomin' Onion and fresh-baked bread..." },
    ],
    afterResult: { title: "Market Tavern | Rib Eye Steak & Skirt Steak | Stockton, CA", url: "markettavernstk.com/menu/entrees", desc: "14oz bone-in Rib Eye with roasted garlic butter ($59). Grilled Skirt Steak with chimichurri ($38). All-natural, sustainably raised. Wood-fired grill at Lincoln Center since 2012." },
  },
  {
    query: "spaghetti and meatballs stockton restaurant",
    keyword: "meatballs",
    emoji: "\uD83C\uDF5D",
    beforeResults: [
      { title: "Angelina's Spaghetti House - Stockton", url: "angelinasspaghetti.com", desc: "Family-style Italian dining since 1962. Our famous spaghetti and meatballs recipe passed down through generations..." },
      { title: "Olive Garden Italian Restaurant - Stockton", url: "olivegarden.com/locations/ca/stockton", desc: "Unlimited breadsticks, soup or salad with our classic spaghetti and meatballs. Never-ending pasta bowl..." },
      { title: "Pietro's Italian Restaurant - Stockton CA", url: "pietrosstockton.com", desc: "Authentic Italian cuisine. House-made pasta, meatballs in marinara, chicken parmesan. Family recipes since 1975..." },
    ],
    afterResult: { title: "Mama Jo's Spaghetti & Meatballs | Market Tavern Stockton", url: "markettavernstk.com/menu/entrees", desc: "House-made meatballs, San Marzano tomato sauce, fresh pasta, parmesan, basil ($28). Our signature dish \u2014 a guest favorite since 2012. Farm-fresh ingredients at Lincoln Center." },
  },
  {
    query: "best brunch stockton ca",
    keyword: "brunch",
    emoji: "\uD83E\uDD5E",
    beforeResults: [
      { title: "Midtown Creperie - Brunch & Breakfast | Stockton", url: "midtowncreperie.com", desc: "Sweet and savory crepes, mimosas, and fresh-brewed coffee. Weekend brunch served Saturday & Sunday 8AM-2PM..." },
      { title: "The Sycamore - Farm to Fork Brunch | Stockton", url: "thesycamorestockton.com", desc: "Elevated brunch experience with locally sourced ingredients. Eggs benedict, avocado toast, pancakes, and craft cocktails..." },
      { title: "Avenue on the Mile - Stockton Brunch Spot", url: "avenueonthemile.com", desc: "Upscale casual brunch in Miracle Mile. Benedicts, omelets, French toast, and bottomless mimosas every weekend..." },
    ],
    afterResult: { title: "Weekend Brunch | Market Tavern | Stockton, CA", url: "markettavernstk.com/menu/weekend-brunch", desc: "Sat & Sun 10AM-2PM. Eggs Benedict ($18), Avocado Toast ($16), Buttermilk Pancakes ($15), Steak & Eggs ($24). Upscale brunch in Lincoln Center with craft cocktails." },
  },
  {
    query: "best salmon dish near me stockton",
    keyword: "salmon",
    emoji: "\uD83D\uDC1F",
    beforeResults: [
      { title: "Bud's Seafood Grille - Fresh Salmon | Stockton", url: "budsseafoodgrille.com/menu", desc: "Pan-seared wild salmon with seasonal vegetables. Fresh fish flown in daily. Fine dining in Stockton since 1985..." },
      { title: "Red Lobster - Stockton, CA", url: "redlobster.com/locations/ca/stockton", desc: "Atlantic salmon with your choice of preparation. Grilled, blackened, or garlic-broiled. Served with fresh sides..." },
      { title: "Kyoto Sushi & Grill - Stockton", url: "kyotostockton.com", desc: "Fresh salmon sashimi, salmon rolls, and grilled salmon teriyaki. Japanese cuisine prepared by expert chefs..." },
    ],
    afterResult: { title: "Pan-Seared Salmon | Market Tavern | Stockton, CA", url: "markettavernstk.com/menu/entrees", desc: "Atlantic salmon, lemon beurre blanc, asparagus, wild rice pilaf ($34). Farm-fresh, cooked to perfection. A guest favorite at Lincoln Center since 2012." },
  }
]

function TypeWriter({ text, speed = 40 }) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    setDisplayed('')
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])
  return <>{displayed}<span className="cursor">|</span></>
}

function App() {
  const [activeSearch, setActiveSearch] = useState(0)
  const [showAfter, setShowAfter] = useState(false)
  const [animKey, setAnimKey] = useState(0)

  const handleSearchChange = (i) => {
    setActiveSearch(i)
    setShowAfter(false)
    setAnimKey(k => k + 1)
  }

  const current = searchQueries[activeSearch]

  return (
    <div className="app">
      {/* Floating header */}
      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <div className="header-logo-wrap">
              <span className="header-logo">MT</span>
              <span className="logo-pulse"></span>
            </div>
            <div>
              <h1>Market Tavern <span className="header-accent">SEO Visibility</span></h1>
              <p>Prepared by Webora Studios</p>
            </div>
          </div>
          <div className="header-right">
            <span className="live-badge"><span className="live-dot"></span> LIVE DEMO</span>
          </div>
        </div>
      </header>

      {/* Big hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">THE PROBLEM</div>
          <h2>Your food is <span className="gradient-text">incredible</span>.<br/>But Google <span className="red-text">can't find it</span>.</h2>
          <p className="hero-sub">
            When a hungry customer in Stockton searches for exactly what you cook &mdash; 
            they find your competitors instead. Here's why, and how we fix it.
          </p>
        </div>
      </section>

      {/* Visual before/after comparison */}
      <section className="compare-section">
        <div className="compare-inner">
          <div className="compare-card bad">
            <div className="compare-status">
              <span className="status-dot red"></span>
              <span>CURRENT SITE</span>
            </div>
            <div className="compare-visual">
              <div className="pdf-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ea4335" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                </svg>
                <span>menu.pdf</span>
              </div>
            </div>
            <h3>PDF Menu</h3>
            <ul>
              <li><span className="x-mark">&times;</span> Google sees a blank file</li>
              <li><span className="x-mark">&times;</span> 0 dishes indexed</li>
              <li><span className="x-mark">&times;</span> Invisible on search results</li>
              <li><span className="x-mark">&times;</span> Losing customers daily</li>
            </ul>
          </div>

          <div className="compare-divider">
            <div className="arrow-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </div>

          <div className="compare-card good">
            <div className="compare-status">
              <span className="status-dot green"></span>
              <span>NEW WEBSITE</span>
            </div>
            <div className="compare-visual">
              <div className="web-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#34a853" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span>indexable HTML</span>
              </div>
            </div>
            <h3>Modern Site</h3>
            <ul>
              <li><span className="check-mark">&check;</span> Google reads every dish</li>
              <li><span className="check-mark">&check;</span> 200+ keywords indexed</li>
              <li><span className="check-mark">&check;</span> Page 1 search results</li>
              <li><span className="check-mark">&check;</span> New customers find you</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive search demo */}
      <section className="demo-section">
        <div className="demo-inner">
          <div className="demo-header">
            <div className="demo-eyebrow">INTERACTIVE DEMO</div>
            <h3>See it in action &mdash; pick a search:</h3>
          </div>

          <div className="search-pills">
            {searchQueries.map((sq, i) => (
              <button
                key={i}
                className={`search-pill ${activeSearch === i ? 'active' : ''}`}
                onClick={() => handleSearchChange(i)}
              >
                <span className="pill-emoji">{sq.emoji}</span>
                {sq.keyword}
              </button>
            ))}
          </div>

          {/* Google mockup */}
          <div className="google-mockup" key={animKey}>
            <div className="google-chrome-bar">
              <div className="chrome-dots"><span></span><span></span><span></span></div>
              <div className="chrome-url">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5f6368" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                google.com/search?q={current.query.replace(/ /g, '+')}
              </div>
            </div>

            <div className="google-body">
              {/* Google logo + search bar */}
              <div className="google-top">
                <div className="google-logo">
                  <span style={{color:'#4285f4'}}>G</span>
                  <span style={{color:'#ea4335'}}>o</span>
                  <span style={{color:'#fbbc05'}}>o</span>
                  <span style={{color:'#4285f4'}}>g</span>
                  <span style={{color:'#34a853'}}>l</span>
                  <span style={{color:'#ea4335'}}>e</span>
                </div>
                <div className="google-search-bar">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9aa0a6" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  <span className="search-text"><TypeWriter text={current.query} speed={35} /></span>
                </div>
                <div className="result-count">About 2,340,000 results (0.42 seconds)</div>
              </div>

              {/* Toggle */}
              <div className="toggle-wrap">
                <button className={`toggle-btn ${!showAfter ? 'active before-active' : ''}`} onClick={() => setShowAfter(false)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                  Today (PDF)
                </button>
                <button className={`toggle-btn ${showAfter ? 'active after-active' : ''}`} onClick={() => setShowAfter(true)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  With New Site
                </button>
              </div>

              {/* Results */}
              <div className="results-area">
                {!showAfter ? (
                  <div className="results-before">
                    <div className="alert-banner red">
                      <div className="alert-icon-wrap red-bg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                        </svg>
                      </div>
                      <div>
                        <strong>Market Tavern is NOWHERE on this page</strong>
                        <p>Your PDF menu hides "{current.keyword}" from Google's crawler</p>
                      </div>
                    </div>
                    {current.beforeResults.map((r, i) => (
                      <div key={i} className="g-result" style={{animationDelay: `${i * 0.1}s`}}>
                        <div className="g-result-top">
                          <div className="g-favicon">{r.url.charAt(0).toUpperCase()}</div>
                          <div className="g-url">{r.url}</div>
                        </div>
                        <h4 className="g-title">{r.title}</h4>
                        <p className="g-desc">{r.desc}</p>
                      </div>
                    ))}
                    <div className="bottom-callout red-callout">
                      <span className="callout-num">#{activeSearch + 1}</span>
                      <p>This search happens <strong>~200 times/month</strong> in Stockton. Every single one goes to a competitor.</p>
                    </div>
                  </div>
                ) : (
                  <div className="results-after">
                    <div className="alert-banner green">
                      <div className="alert-icon-wrap green-bg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                      </div>
                      <div>
                        <strong>Market Tavern ranks #1!</strong>
                        <p>Every dish on your new site is fully indexable by Google</p>
                      </div>
                    </div>
                    <div className="g-result highlighted-result">
                      <div className="rank-badge">#1</div>
                      <div className="g-result-top">
                        <div className="g-favicon mt-favicon">MT</div>
                        <div className="g-url">{current.afterResult.url}</div>
                      </div>
                      <h4 className="g-title">{current.afterResult.title}</h4>
                      <p className="g-desc">{current.afterResult.desc}</p>
                      <div className="your-restaurant-tag">YOUR RESTAURANT</div>
                    </div>
                    {current.beforeResults.slice(0, 2).map((r, i) => (
                      <div key={i} className="g-result faded" style={{animationDelay: `${(i + 1) * 0.1}s`}}>
                        <div className="g-result-top">
                          <div className="g-favicon">{r.url.charAt(0).toUpperCase()}</div>
                          <div className="g-url">{r.url}</div>
                        </div>
                        <h4 className="g-title">{r.title}</h4>
                        <p className="g-desc">{r.desc}</p>
                      </div>
                    ))}
                    <div className="bottom-callout green-callout">
                      <span className="callout-num">&uarr;</span>
                      <p>This customer now <strong>finds you first</strong> and orders directly &mdash; no DoorDash fees.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="impact">
        <div className="impact-inner">
          <div className="impact-eyebrow">THE IMPACT</div>
          <h3>What Market Tavern is missing right now</h3>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-num">~1,200</div>
              <div className="impact-label">monthly food searches in Stockton that your menu matches</div>
            </div>
            <div className="impact-card red-card">
              <div className="impact-num">0</div>
              <div className="impact-label">times Market Tavern currently appears (PDF is invisible to Google)</div>
            </div>
            <div className="impact-card gold-card">
              <div className="impact-num">2-4 wks</div>
              <div className="impact-label">until you start ranking after the new site goes live</div>
            </div>
          </div>
          <div className="impact-bottom">
            <p>Every day without a modern website is another day your competitors get the customers who are searching for <em>exactly what you serve</em>.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <p>Prepared exclusively for <strong>Market Tavern</strong> by <strong>Webora Studios</strong></p>
          <p className="footer-sub">Central Valley, CA &bull; This is a visual demonstration. No real Google data was used.</p>
        </div>
      </footer>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .app { min-height: 100vh; background: #0a0a14; color: #f5f5f5; font-family: 'Inter', -apple-system, sans-serif; }

        /* Animations */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(201,169,110,0.1); } 50% { box-shadow: 0 0 40px rgba(201,169,110,0.25); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.8); opacity: 0; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes slideInResult { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes highlightPop { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
        @keyframes livePulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

        .cursor { animation: blink 0.8s infinite; color: #4285f4; font-weight: 300; }

        /* Header */
        .header { background: rgba(10,10,20,0.9); backdrop-filter: blur(24px); border-bottom: 1px solid rgba(201,169,110,0.15); padding: 14px 32px; position: sticky; top: 0; z-index: 100; }
        .header-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
        .header-brand { display: flex; align-items: center; gap: 14px; }
        .header-logo-wrap { position: relative; }
        .header-logo { width: 42px; height: 42px; background: linear-gradient(135deg, #c9a96e, #a67c3d); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 15px; color: #0a0a14; position: relative; z-index: 1; }
        .logo-pulse { position: absolute; inset: -3px; border-radius: 12px; border: 2px solid #c9a96e; animation: pulse 2s infinite; }
        .header-brand h1 { font-size: 17px; font-weight: 600; letter-spacing: -0.3px; }
        .header-accent { color: #c9a96e; }
        .header-brand p { font-size: 11px; color: #666; margin-top: 1px; }
        .live-badge { display: flex; align-items: center; gap: 6px; background: rgba(201,169,110,0.08); border: 1px solid rgba(201,169,110,0.25); padding: 6px 14px; border-radius: 20px; font-size: 11px; font-weight: 700; color: #c9a96e; letter-spacing: 1px; }
        .live-dot { width: 7px; height: 7px; background: #c9a96e; border-radius: 50%; animation: livePulse 1.5s infinite; }

        /* Hero */
        .hero { padding: 80px 32px 60px; text-align: center; background: radial-gradient(ellipse at 50% 30%, rgba(201,169,110,0.04) 0%, transparent 70%); }
        .hero-inner { max-width: 750px; margin: 0 auto; animation: fadeUp 0.8s ease; }
        .hero-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 3px; color: #c9a96e; margin-bottom: 20px; }
        .hero-inner h2 { font-size: clamp(32px, 5vw, 52px); font-weight: 800; line-height: 1.15; margin-bottom: 20px; letter-spacing: -1px; }
        .gradient-text { background: linear-gradient(135deg, #c9a96e, #e8d5b7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .red-text { color: #ea4335; }
        .hero-sub { font-size: 18px; color: #888; line-height: 1.7; max-width: 580px; margin: 0 auto; }

        /* Comparison section */
        .compare-section { padding: 0 32px 80px; }
        .compare-inner { max-width: 800px; margin: 0 auto; display: grid; grid-template-columns: 1fr auto 1fr; gap: 20px; align-items: center; animation: fadeUp 0.8s ease 0.2s both; }
        .compare-card { background: #12121f; border-radius: 20px; padding: 32px; border: 1px solid #1e1e32; }
        .compare-card.bad { border-color: rgba(234,67,53,0.3); }
        .compare-card.good { border-color: rgba(52,168,83,0.3); animation: glow 3s infinite; }
        .compare-status { display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: #888; margin-bottom: 20px; }
        .status-dot { width: 8px; height: 8px; border-radius: 50%; }
        .status-dot.red { background: #ea4335; }
        .status-dot.green { background: #34a853; }
        .compare-visual { display: flex; justify-content: center; margin-bottom: 20px; padding: 24px; background: rgba(255,255,255,0.02); border-radius: 12px; }
        .pdf-icon, .web-icon { display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .pdf-icon span, .web-icon span { font-size: 11px; color: #666; font-family: monospace; }
        .compare-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 16px; }
        .compare-card ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .compare-card li { font-size: 14px; color: #999; display: flex; align-items: center; gap: 10px; }
        .x-mark { color: #ea4335; font-size: 18px; font-weight: 700; }
        .check-mark { color: #34a853; font-size: 18px; font-weight: 700; }
        .compare-divider { display: flex; align-items: center; justify-content: center; }
        .arrow-circle { width: 48px; height: 48px; border-radius: 50%; background: rgba(201,169,110,0.1); border: 1px solid rgba(201,169,110,0.3); display: flex; align-items: center; justify-content: center; }

        /* Demo section */
        .demo-section { padding: 80px 32px; background: linear-gradient(180deg, transparent 0%, rgba(201,169,110,0.02) 50%, transparent 100%); }
        .demo-inner { max-width: 800px; margin: 0 auto; }
        .demo-header { text-align: center; margin-bottom: 28px; }
        .demo-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 3px; color: #c9a96e; margin-bottom: 10px; }
        .demo-header h3 { font-size: 24px; font-weight: 700; }

        /* Search pills */
        .search-pills { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 32px; }
        .search-pill { padding: 10px 18px; border-radius: 30px; font-size: 13px; font-weight: 500; background: rgba(30,30,50,0.8); color: #888; border: 1px solid #2a2a44; transition: all 0.25s; display: flex; align-items: center; gap: 8px; }
        .search-pill:hover { color: #f5f5f5; border-color: #c9a96e; transform: translateY(-2px); }
        .search-pill.active { background: linear-gradient(135deg, #c9a96e, #a67c3d); color: #0a0a14; border-color: #c9a96e; font-weight: 700; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,169,110,0.25); }
        .pill-emoji { font-size: 16px; }

        /* Google mockup */
        .google-mockup { border-radius: 16px; overflow: hidden; box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05); }
        .google-chrome-bar { background: #202124; padding: 12px 16px; display: flex; align-items: center; gap: 12px; }
        .chrome-dots { display: flex; gap: 6px; }
        .chrome-dots span { width: 10px; height: 10px; border-radius: 50%; }
        .chrome-dots span:nth-child(1) { background: #ea4335; }
        .chrome-dots span:nth-child(2) { background: #fbbc05; }
        .chrome-dots span:nth-child(3) { background: #34a853; }
        .chrome-url { flex: 1; background: #303134; border-radius: 16px; padding: 8px 14px; font-size: 12px; color: #bdc1c6; display: flex; align-items: center; gap: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .google-body { background: #fff; padding: 24px; }
        .google-top { margin-bottom: 20px; }
        .google-logo { font-size: 22px; font-weight: 700; margin-bottom: 16px; letter-spacing: -0.5px; }
        .google-search-bar { display: flex; align-items: center; gap: 12px; padding: 12px 20px; border: 1px solid #dfe1e5; border-radius: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); margin-bottom: 8px; }
        .search-text { font-size: 15px; color: #202124; flex: 1; }
        .result-count { font-size: 12px; color: #70757a; }

        /* Toggle */
        .toggle-wrap { display: flex; gap: 8px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid #e8eaed; }
        .toggle-btn { flex: 1; padding: 12px 16px; border-radius: 10px; font-size: 13px; font-weight: 600; background: #f8f9fa; color: #5f6368; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s; border: 2px solid transparent; }
        .toggle-btn:hover { background: #e8eaed; }
        .toggle-btn.before-active { background: #fef2f2; color: #dc2626; border-color: #fecaca; }
        .toggle-btn.after-active { background: #f0fdf4; color: #166534; border-color: #bbf7d0; }

        /* Results */
        .results-area { min-height: 300px; }
        .alert-banner { display: flex; align-items: center; gap: 14px; padding: 16px 20px; border-radius: 12px; margin-bottom: 20px; animation: fadeUp 0.4s ease; }
        .alert-banner.red { background: #fef2f2; border: 1px solid #fecaca; }
        .alert-banner.green { background: #f0fdf4; border: 1px solid #bbf7d0; }
        .alert-icon-wrap { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .alert-icon-wrap.red-bg { background: #ea4335; }
        .alert-icon-wrap.green-bg { background: #34a853; }
        .alert-banner strong { font-size: 14px; color: #202124; display: block; margin-bottom: 2px; }
        .alert-banner p { font-size: 12px; color: #5f6368; }

        .g-result { padding: 14px 0; border-bottom: 1px solid #f1f3f4; animation: slideInResult 0.4s ease both; }
        .g-result.faded { opacity: 0.5; }
        .g-result-top { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
        .g-favicon { width: 24px; height: 24px; border-radius: 50%; background: #f1f3f4; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: #5f6368; }
        .mt-favicon { background: linear-gradient(135deg, #c9a96e, #a67c3d); color: #0a0a14; font-size: 9px; }
        .g-url { font-size: 12px; color: #4d5156; }
        .g-title { font-size: 17px; color: #1a0dab; font-weight: 400; margin-bottom: 4px; line-height: 1.3; }
        .g-desc { font-size: 13px; color: #4d5156; line-height: 1.5; }

        .highlighted-result { background: linear-gradient(135deg, rgba(52,168,83,0.04), rgba(201,169,110,0.04)); border: 2px solid rgba(52,168,83,0.3); border-radius: 14px; padding: 20px !important; margin-bottom: 12px; position: relative; animation: highlightPop 0.5s ease; box-shadow: 0 4px 16px rgba(52,168,83,0.08); }
        .highlighted-result .g-title { font-weight: 600; font-size: 18px; }
        .rank-badge { position: absolute; top: -10px; left: 20px; background: linear-gradient(135deg, #34a853, #2d9348); color: #fff; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 20px; box-shadow: 0 4px 12px rgba(52,168,83,0.3); }
        .your-restaurant-tag { display: inline-block; margin-top: 10px; background: rgba(52,168,83,0.1); color: #166534; font-size: 10px; font-weight: 700; padding: 4px 12px; border-radius: 20px; letter-spacing: 0.5px; border: 1px solid rgba(52,168,83,0.2); }

        .bottom-callout { display: flex; align-items: center; gap: 14px; padding: 16px 20px; border-radius: 12px; margin-top: 16px; animation: fadeUp 0.5s ease 0.3s both; }
        .red-callout { background: #fffbeb; border: 1px solid #fde68a; }
        .red-callout p { color: #92400e; font-size: 13px; }
        .green-callout { background: #f0fdf4; border: 1px solid #bbf7d0; }
        .green-callout p { color: #166534; font-size: 13px; }
        .callout-num { width: 32px; height: 32px; border-radius: 50%; background: rgba(201,169,110,0.15); display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; color: #c9a96e; flex-shrink: 0; }

        /* Impact */
        .impact { padding: 80px 32px; }
        .impact-inner { max-width: 900px; margin: 0 auto; text-align: center; }
        .impact-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 3px; color: #c9a96e; margin-bottom: 12px; }
        .impact-inner h3 { font-size: 28px; font-weight: 800; margin-bottom: 40px; }
        .impact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 40px; }
        .impact-card { background: #12121f; border: 1px solid #1e1e32; border-radius: 20px; padding: 36px 24px; transition: all 0.3s; }
        .impact-card:hover { transform: translateY(-4px); }
        .impact-card.red-card { border-color: rgba(234,67,53,0.3); }
        .impact-card.gold-card { border-color: rgba(201,169,110,0.3); animation: glow 3s infinite; }
        .impact-num { font-size: 40px; font-weight: 800; margin-bottom: 10px; }
        .red-card .impact-num { color: #ea4335; }
        .gold-card .impact-num { color: #c9a96e; }
        .impact-label { font-size: 13px; color: #888; line-height: 1.5; }
        .impact-bottom p { font-size: 17px; color: #888; line-height: 1.7; max-width: 600px; margin: 0 auto; }
        .impact-bottom em { color: #c9a96e; font-style: normal; font-weight: 600; }

        /* Footer */
        .footer { padding: 32px; border-top: 1px solid #1e1e32; }
        .footer-inner { text-align: center; }
        .footer p { font-size: 14px; color: #666; }
        .footer strong { color: #c9a96e; }
        .footer-sub { font-size: 11px; color: #444; margin-top: 6px; }

        /* Responsive */
        @media (max-width: 768px) {
          .header-inner { flex-direction: column; gap: 10px; align-items: flex-start; }
          .compare-inner { grid-template-columns: 1fr; }
          .compare-divider { transform: rotate(90deg); padding: 12px 0; }
          .impact-grid { grid-template-columns: 1fr; }
          .search-pills { overflow-x: auto; flex-wrap: nowrap; justify-content: flex-start; padding-bottom: 8px; }
          .hero-inner h2 { font-size: 28px; }
        }
      `}</style>
    </div>
  )
}

export default App
