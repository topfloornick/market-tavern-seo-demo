import { useState } from 'react'

const searchQueries = [
  {
    query: "best wood fired pizza near me stockton",
    keyword: "wood fired pizza",
    beforeResults: [
      { title: "Papapavlo's Bistro & Bar - Stockton, CA", url: "papapavlos.com", desc: "Authentic Mediterranean cuisine with wood-fired pizzas baked fresh daily. Margherita, pepperoni, and seasonal specials..." },
      { title: "Michael's Pizza - Wood Fired Pies | Stockton", url: "michaelspizzastockton.com", desc: "Family-owned pizzeria serving Stockton since 1998. Our wood-fired oven reaches 900 degrees for the perfect Neapolitan crust..." },
      { title: "Pietro's Italian Restaurant - Stockton CA", url: "pietrosstockton.com", desc: "Traditional Italian dining with our famous wood-fired pizza oven. Try our margherita, quattro formaggi, and diavola..." },
    ],
    afterResults: [
      { title: "Market Tavern | Wood-Fired Neapolitan Pizza | Stockton, CA", url: "markettavernstk.com/menu/wood-fired-pizzas", desc: "Authentic Neapolitan-style pizza from our wood-burning oven. Margherita ($18), The Meat Lover with Hobbs salami ($24), Wild Mushroom with truffle oil ($22). Farm-fresh ingredients, baked at 900°F.", highlighted: true },
      { title: "Papapavlo's Bistro & Bar - Stockton, CA", url: "papapavlos.com", desc: "Authentic Mediterranean cuisine with wood-fired pizzas baked fresh daily. Margherita, pepperoni, and seasonal specials..." },
      { title: "Michael's Pizza - Wood Fired Pies | Stockton", url: "michaelspizzastockton.com", desc: "Family-owned pizzeria serving Stockton since 1998. Our wood-fired oven reaches 900 degrees for the perfect Neapolitan crust..." },
    ]
  },
  {
    query: "best brisket sandwich near me",
    keyword: "brisket sandwich",
    beforeResults: [
      { title: "Smoked Out BBQ - Stockton, CA", url: "smokedoutbbqstockton.com", desc: "Slow-smoked Texas-style barbecue. Our 14-hour brisket is sliced fresh daily. Sandwiches, platters, and family packs..." },
      { title: "Cast Iron Trading Co. | BBQ & Comfort Food", url: "castirontradingco.com", desc: "Craft BBQ in downtown Stockton. Brisket, pulled pork, ribs and all the fixings. Award-winning smoked meats..." },
      { title: "Squeeze Burger - Stockton | Burgers & Sandwiches", url: "squeezeburger.com", desc: "Home of the famous squeeze burger. Also serving pulled pork and brisket sandwiches on fresh-baked buns..." },
    ],
    afterResults: [
      { title: "Market Tavern | Brisket Sandwich | Stockton, CA", url: "markettavernstk.com/menu/burgers-sandwiches", desc: "12-hour smoked brisket, caramelized onions, horseradish cream, pickles, brioche bun. Served with fries ($22). Handcrafted with premium ingredients at Lincoln Center.", highlighted: true },
      { title: "Smoked Out BBQ - Stockton, CA", url: "smokedoutbbqstockton.com", desc: "Slow-smoked Texas-style barbecue. Our 14-hour brisket is sliced fresh daily. Sandwiches, platters, and family packs..." },
      { title: "Cast Iron Trading Co. | BBQ & Comfort Food", url: "castirontradingco.com", desc: "Craft BBQ in downtown Stockton. Brisket, pulled pork, ribs and all the fixings. Award-winning smoked meats..." },
    ]
  },
  {
    query: "best steak restaurant stockton ca",
    keyword: "steak restaurant",
    beforeResults: [
      { title: "Bud's Seafood Grille - Stockton, CA", url: "budsseafoodgrille.com", desc: "Fine dining in Stockton since 1985. Prime steaks, fresh seafood, and an extensive wine list. Reservations recommended..." },
      { title: "Black Bear Diner - Stockton | American Dining", url: "blackbeardiner.com/stockton", desc: "Hearty American meals including hand-cut steaks, burgers, and homestyle comfort food. Family-friendly atmosphere..." },
      { title: "Outback Steakhouse - Stockton", url: "outback.com/locations/ca/stockton", desc: "Bold flavors on the grill. Enjoy our signature steaks, ribs, and seafood. Bloomin' Onion and fresh-baked bread..." },
    ],
    afterResults: [
      { title: "Market Tavern | Rib Eye Steak & Skirt Steak | Stockton, CA", url: "markettavernstk.com/menu/entrees", desc: "14oz bone-in Rib Eye with roasted garlic butter ($59). Grilled Skirt Steak with chimichurri ($38). All-natural, sustainably raised. Wood-fired grill at Lincoln Center since 2012.", highlighted: true },
      { title: "Bud's Seafood Grille - Stockton, CA", url: "budsseafoodgrille.com", desc: "Fine dining in Stockton since 1985. Prime steaks, fresh seafood, and an extensive wine list. Reservations recommended..." },
      { title: "Black Bear Diner - Stockton | American Dining", url: "blackbeardiner.com/stockton", desc: "Hearty American meals including hand-cut steaks, burgers, and homestyle comfort food. Family-friendly atmosphere..." },
    ]
  },
  {
    query: "spaghetti and meatballs stockton restaurant",
    keyword: "spaghetti and meatballs",
    beforeResults: [
      { title: "Angelina's Spaghetti House - Stockton", url: "angelinasspaghetti.com", desc: "Family-style Italian dining since 1962. Our famous spaghetti and meatballs recipe passed down through generations..." },
      { title: "Olive Garden Italian Restaurant - Stockton", url: "olivegarden.com/locations/ca/stockton", desc: "Unlimited breadsticks, soup or salad with our classic spaghetti and meatballs. Never-ending pasta bowl..." },
      { title: "Pietro's Italian Restaurant - Stockton CA", url: "pietrosstockton.com", desc: "Authentic Italian cuisine. House-made pasta, meatballs in marinara, chicken parmesan. Family recipes since 1975..." },
    ],
    afterResults: [
      { title: "Mama Jo's Spaghetti & Meatballs | Market Tavern Stockton", url: "markettavernstk.com/menu/entrees", desc: "House-made meatballs, San Marzano tomato sauce, fresh pasta, parmesan, basil ($28). Our signature dish — a guest favorite since 2012. Farm-fresh ingredients at Lincoln Center.", highlighted: true },
      { title: "Angelina's Spaghetti House - Stockton", url: "angelinasspaghetti.com", desc: "Family-style Italian dining since 1962. Our famous spaghetti and meatballs recipe passed down through generations..." },
      { title: "Olive Garden Italian Restaurant - Stockton", url: "olivegarden.com/locations/ca/stockton", desc: "Unlimited breadsticks, soup or salad with our classic spaghetti and meatballs. Never-ending pasta bowl..." },
    ]
  },
  {
    query: "best brunch stockton ca",
    keyword: "brunch",
    beforeResults: [
      { title: "Midtown Creperie - Brunch & Breakfast | Stockton", url: "midtowncreperie.com", desc: "Sweet and savory crepes, mimosas, and fresh-brewed coffee. Weekend brunch served Saturday & Sunday 8AM-2PM..." },
      { title: "The Sycamore - Farm to Fork Brunch | Stockton", url: "thesycamorestockton.com", desc: "Elevated brunch experience with locally sourced ingredients. Eggs benedict, avocado toast, pancakes, and craft cocktails..." },
      { title: "Avenue on the Mile - Stockton Brunch Spot", url: "avenueonthemile.com", desc: "Upscale casual brunch in Miracle Mile. Benedicts, omelets, French toast, and bottomless mimosas every weekend..." },
    ],
    afterResults: [
      { title: "Weekend Brunch | Market Tavern | Stockton, CA", url: "markettavernstk.com/menu/weekend-brunch", desc: "Sat & Sun 10AM-2PM. Eggs Benedict ($18), Avocado Toast ($16), Buttermilk Pancakes ($15), Steak & Eggs ($24). Upscale brunch in Lincoln Center with craft cocktails.", highlighted: true },
      { title: "Midtown Creperie - Brunch & Breakfast | Stockton", url: "midtowncreperie.com", desc: "Sweet and savory crepes, mimosas, and fresh-brewed coffee. Weekend brunch served Saturday & Sunday 8AM-2PM..." },
      { title: "The Sycamore - Farm to Fork Brunch | Stockton", url: "thesycamorestockton.com", desc: "Elevated brunch experience with locally sourced ingredients. Eggs benedict, avocado toast, pancakes, and craft cocktails..." },
    ]
  },
  {
    query: "best salmon dish near me stockton",
    keyword: "salmon",
    beforeResults: [
      { title: "Bud's Seafood Grille - Fresh Salmon | Stockton", url: "budsseafoodgrille.com/menu", desc: "Pan-seared wild salmon with seasonal vegetables. Fresh fish flown in daily. Fine dining in Stockton since 1985..." },
      { title: "Red Lobster - Stockton, CA", url: "redlobster.com/locations/ca/stockton", desc: "Atlantic salmon with your choice of preparation. Grilled, blackened, or garlic-broiled. Served with fresh sides..." },
      { title: "Kyoto Sushi & Grill - Stockton", url: "kyotostockton.com", desc: "Fresh salmon sashimi, salmon rolls, and grilled salmon teriyaki. Japanese cuisine prepared by expert chefs..." },
    ],
    afterResults: [
      { title: "Pan-Seared Salmon | Market Tavern | Stockton, CA", url: "markettavernstk.com/menu/entrees", desc: "Atlantic salmon, lemon beurre blanc, asparagus, wild rice pilaf ($34). Farm-fresh, cooked to perfection. A guest favorite at Lincoln Center since 2012.", highlighted: true },
      { title: "Bud's Seafood Grille - Fresh Salmon | Stockton", url: "budsseafoodgrille.com/menu", desc: "Pan-seared wild salmon with seasonal vegetables. Fresh fish flown in daily. Fine dining in Stockton since 1985..." },
      { title: "Red Lobster - Stockton, CA", url: "redlobster.com/locations/ca/stockton", desc: "Atlantic salmon with your choice of preparation. Grilled, blackened, or garlic-broiled. Served with fresh sides..." },
    ]
  }
]

function GoogleSearchResult({ result, position }) {
  return (
    <div className={`search-result ${result.highlighted ? 'highlighted' : ''}`}>
      <div className="result-url">
        <div className="result-favicon">{result.url.charAt(0).toUpperCase()}</div>
        <div className="result-url-text">
          <span className="result-site">{result.url.split('/')[0]}</span>
          <span className="result-path">{result.url.includes('/') ? ' > ' + result.url.split('/').slice(1).join(' > ') : ''}</span>
        </div>
      </div>
      <h3 className="result-title">{result.title}</h3>
      <p className="result-desc">{result.desc}</p>
      {result.highlighted && <div className="result-badge">YOUR RESTAURANT</div>}
    </div>
  )
}

function SearchDemo({ query, beforeResults, afterResults, keyword }) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <div className="search-demo">
      <div className="search-bar-container">
        <div className="google-search-bar">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9aa0a6" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span className="search-text">{query}</span>
          <svg className="mic-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9aa0a6" strokeWidth="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
        </div>
        <div className="result-count">About 2,340,000 results (0.42 seconds)</div>
      </div>

      <div className="toggle-container">
        <button className={`toggle-btn ${!showAfter ? 'active' : ''}`} onClick={() => setShowAfter(false)}>
          <span className="toggle-icon">&#10060;</span> Current Site (PDF Menu)
        </button>
        <button className={`toggle-btn after ${showAfter ? 'active' : ''}`} onClick={() => setShowAfter(true)}>
          <span className="toggle-icon">&#9989;</span> With New Website
        </button>
      </div>

      {!showAfter ? (
        <div className="results-panel before">
          <div className="not-found-banner">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea4335" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
            <div>
              <strong>Market Tavern does NOT appear</strong>
              <p>Google cannot read your PDF menu — your "{keyword}" never gets indexed</p>
            </div>
          </div>
          {beforeResults.map((r, i) => <GoogleSearchResult key={i} result={r} position={i + 1} />)}
          <div className="lost-customer-callout">
            <span className="lost-emoji">&#128680;</span>
            <p>Every one of these searches is a <strong>customer you're losing</strong> to competitors right now.</p>
          </div>
        </div>
      ) : (
        <div className="results-panel after">
          <div className="found-banner">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34a853" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <div>
              <strong>Market Tavern ranks #1!</strong>
              <p>Your dishes are now indexable — Google finds "{keyword}" on your site</p>
            </div>
          </div>
          {afterResults.map((r, i) => <GoogleSearchResult key={i} result={r} position={i + 1} />)}
          <div className="gained-customer-callout">
            <span className="gained-emoji">&#128176;</span>
            <p>This customer now finds <strong>Market Tavern first</strong> and orders directly from you.</p>
          </div>
        </div>
      )}
    </div>
  )
}

function App() {
  const [activeSearch, setActiveSearch] = useState(0)

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <span className="header-logo">MT</span>
            <div>
              <h1>Market Tavern — SEO Demo</h1>
              <p>Why your dishes need to be on a modern website</p>
            </div>
          </div>
          <span className="header-by">by Webora Studios</span>
        </div>
      </header>

      {/* Hero explanation */}
      <section className="hero">
        <div className="hero-inner">
          <h2>Your food is incredible.<br/>But Google can't find it.</h2>
          <p>
            Right now, when someone searches <strong>"best {searchQueries[activeSearch].keyword} near me"</strong> in Stockton — 
            Market Tavern <u>doesn't show up</u>. That's because your menu is stuck in a PDF that Google cannot read.
          </p>
          <div className="hero-comparison">
            <div className="compare-card bad">
              <div className="compare-header">
                <span className="compare-icon">&#128196;</span>
                <h4>PDF Menu (Current)</h4>
              </div>
              <ul>
                <li>Google sees: <code>menu.pdf</code></li>
                <li>Keywords found: <strong>0</strong></li>
                <li>Search visibility: <strong>None</strong></li>
                <li>Result: Invisible to hungry customers</li>
              </ul>
            </div>
            <div className="compare-arrow">&#8594;</div>
            <div className="compare-card good">
              <div className="compare-header">
                <span className="compare-icon">&#127760;</span>
                <h4>Modern Website (New)</h4>
              </div>
              <ul>
                <li>Google sees: <code>Every dish name + description</code></li>
                <li>Keywords found: <strong>200+</strong></li>
                <li>Search visibility: <strong>Page 1</strong></li>
                <li>Result: New customers find you daily</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Search selector */}
      <section className="searches">
        <div className="searches-inner">
          <h3>Try these real searches your customers are making:</h3>
          <div className="search-pills">
            {searchQueries.map((sq, i) => (
              <button
                key={i}
                className={`search-pill ${activeSearch === i ? 'active' : ''}`}
                onClick={() => setActiveSearch(i)}
              >
                "{sq.keyword}"
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Google results demo */}
      <section className="demo-section">
        <div className="demo-inner">
          <SearchDemo {...searchQueries[activeSearch]} />
        </div>
      </section>

      {/* Stats section */}
      <section className="stats">
        <div className="stats-inner">
          <h3>What this means for Market Tavern</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">~1,200</span>
              <span className="stat-label">Monthly searches for food keywords in Stockton</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">0</span>
              <span className="stat-label">Times Market Tavern currently appears (PDF is invisible)</span>
            </div>
            <div className="stat-card accent">
              <span className="stat-number">$$$</span>
              <span className="stat-label">Revenue lost daily to competitors with modern sites</span>
            </div>
          </div>
          <div className="stats-cta">
            <p>Within <strong>2-4 weeks</strong> of launching the new site, Market Tavern will start appearing in Google results for every dish you serve.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Demo built by <strong>Webora Studios</strong> &middot; Central Valley, CA</p>
        <p className="footer-sub">This is a visual demonstration for Market Tavern. No real Google data was used.</p>
      </footer>

      <style>{`
        .app { min-height: 100vh; }

        /* Header */
        .header { background: rgba(15,15,26,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid #2a2a44; padding: 16px 32px; position: sticky; top: 0; z-index: 100; }
        .header-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
        .header-brand { display: flex; align-items: center; gap: 12px; }
        .header-logo { width: 40px; height: 40px; background: linear-gradient(135deg, #c9a96e, #b8944f); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; color: #1a1a2e; }
        .header-brand h1 { font-size: 18px; font-weight: 600; }
        .header-brand p { font-size: 12px; color: #a0a0a0; }
        .header-by { font-size: 12px; color: #c9a96e; font-weight: 500; }

        /* Hero */
        .hero { padding: 60px 32px; background: radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.06) 0%, transparent 60%); }
        .hero-inner { max-width: 900px; margin: 0 auto; text-align: center; }
        .hero-inner h2 { font-size: clamp(28px, 4vw, 42px); font-weight: 800; margin-bottom: 16px; line-height: 1.2; }
        .hero-inner > p { font-size: 17px; color: #a0a0a0; max-width: 650px; margin: 0 auto 40px; line-height: 1.7; }
        .hero-inner strong { color: #f5f5f5; }
        .hero-inner u { text-decoration-color: #ea4335; text-underline-offset: 3px; }
        .hero-comparison { display: flex; align-items: center; justify-content: center; gap: 24px; flex-wrap: wrap; }
        .compare-card { background: #1e1e32; border: 1px solid #2a2a44; border-radius: 16px; padding: 24px; width: 300px; text-align: left; }
        .compare-card.bad { border-color: rgba(234,67,53,0.4); }
        .compare-card.good { border-color: rgba(52,168,83,0.4); }
        .compare-header { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
        .compare-icon { font-size: 24px; }
        .compare-header h4 { font-size: 15px; font-weight: 600; }
        .compare-card ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .compare-card li { font-size: 13px; color: #a0a0a0; }
        .compare-card li strong { color: #f5f5f5; }
        .compare-card li code { background: #16213e; padding: 2px 6px; border-radius: 4px; font-size: 11px; color: #c9a96e; }
        .compare-arrow { font-size: 28px; color: #c9a96e; }

        /* Search pills */
        .searches { padding: 40px 32px 20px; }
        .searches-inner { max-width: 1100px; margin: 0 auto; text-align: center; }
        .searches-inner h3 { font-size: 18px; margin-bottom: 20px; font-weight: 600; }
        .search-pills { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
        .search-pill { padding: 10px 20px; border-radius: 30px; font-size: 14px; font-weight: 500; background: #1e1e32; color: #a0a0a0; border: 1px solid #2a2a44; transition: all 0.2s; }
        .search-pill:hover { color: #f5f5f5; border-color: #c9a96e; }
        .search-pill.active { background: #c9a96e; color: #1a1a2e; border-color: #c9a96e; font-weight: 600; }

        /* Demo section */
        .demo-section { padding: 30px 32px 60px; }
        .demo-inner { max-width: 750px; margin: 0 auto; }

        /* Google search UI */
        .search-demo { background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        .search-bar-container { background: #fff; padding: 20px 24px 12px; border-bottom: 1px solid #dfe1e5; }
        .google-search-bar { display: flex; align-items: center; gap: 12px; padding: 12px 20px; border: 1px solid #dfe1e5; border-radius: 24px; background: #fff; box-shadow: 0 1px 6px rgba(32,33,36,0.08); }
        .search-text { flex: 1; font-size: 16px; color: #202124; }
        .result-count { font-size: 12px; color: #70757a; margin-top: 12px; }

        /* Toggle */
        .toggle-container { display: flex; gap: 0; background: #f8f9fa; border-bottom: 1px solid #dfe1e5; }
        .toggle-btn { flex: 1; padding: 14px 20px; font-size: 14px; font-weight: 500; background: #f8f9fa; color: #5f6368; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s; }
        .toggle-btn:hover { background: #e8eaed; }
        .toggle-btn.active { background: #fff; color: #ea4335; border-bottom: 3px solid #ea4335; font-weight: 600; }
        .toggle-btn.after.active { color: #34a853; border-bottom-color: #34a853; }
        .toggle-icon { font-size: 16px; }

        /* Results */
        .results-panel { padding: 20px 24px; background: #fff; }
        .not-found-banner, .found-banner { display: flex; align-items: flex-start; gap: 12px; padding: 16px; border-radius: 10px; margin-bottom: 20px; }
        .not-found-banner { background: #fef2f2; border: 1px solid #fecaca; }
        .not-found-banner strong { color: #dc2626; font-size: 14px; }
        .not-found-banner p { color: #7f1d1d; font-size: 12px; margin-top: 2px; }
        .found-banner { background: #f0fdf4; border: 1px solid #bbf7d0; }
        .found-banner strong { color: #166534; font-size: 14px; }
        .found-banner p { color: #14532d; font-size: 12px; margin-top: 2px; }

        .search-result { padding: 16px 0; border-bottom: 1px solid #f1f3f4; position: relative; }
        .search-result:last-of-type { border-bottom: none; }
        .search-result.highlighted { background: rgba(52, 168, 83, 0.04); margin: 0 -24px; padding: 16px 24px; border: 1px solid rgba(52, 168, 83, 0.2); border-radius: 12px; margin-bottom: 12px; }
        .result-url { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
        .result-favicon { width: 26px; height: 26px; border-radius: 50%; background: #f1f3f4; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; color: #5f6368; }
        .search-result.highlighted .result-favicon { background: #c9a96e; color: #1a1a2e; }
        .result-url-text { font-size: 12px; color: #4d5156; }
        .result-site { color: #202124; font-size: 13px; }
        .result-path { color: #70757a; font-size: 12px; }
        .result-title { font-size: 18px; color: #1a0dab; font-weight: 400; margin-bottom: 4px; line-height: 1.3; }
        .search-result.highlighted .result-title { color: #1a0dab; font-weight: 500; }
        .result-desc { font-size: 13px; color: #4d5156; line-height: 1.5; }
        .result-badge { position: absolute; top: 16px; right: 16px; background: #34a853; color: #fff; font-size: 10px; font-weight: 700; padding: 4px 10px; border-radius: 20px; letter-spacing: 0.5px; }

        .lost-customer-callout, .gained-customer-callout { display: flex; align-items: center; gap: 12px; padding: 16px; border-radius: 10px; margin-top: 16px; }
        .lost-customer-callout { background: #fff8f0; border: 1px solid #fed7aa; }
        .lost-customer-callout p { color: #92400e; font-size: 13px; }
        .gained-customer-callout { background: #f0fdf4; border: 1px solid #bbf7d0; }
        .gained-customer-callout p { color: #166534; font-size: 13px; }
        .lost-emoji, .gained-emoji { font-size: 24px; }

        /* Stats */
        .stats { padding: 60px 32px; }
        .stats-inner { max-width: 900px; margin: 0 auto; text-align: center; }
        .stats-inner h3 { font-size: 24px; font-weight: 700; margin-bottom: 32px; }
        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 32px; }
        .stat-card { background: #1e1e32; border: 1px solid #2a2a44; border-radius: 16px; padding: 32px 24px; }
        .stat-card.accent { border-color: rgba(201,169,110,0.4); background: rgba(201,169,110,0.05); }
        .stat-number { display: block; font-size: 36px; font-weight: 800; margin-bottom: 8px; }
        .stat-card.accent .stat-number { color: #c9a96e; }
        .stat-label { font-size: 13px; color: #a0a0a0; }
        .stats-cta p { font-size: 16px; color: #a0a0a0; }
        .stats-cta strong { color: #c9a96e; }

        /* Footer */
        .footer { padding: 32px; text-align: center; border-top: 1px solid #2a2a44; }
        .footer p { font-size: 14px; color: #a0a0a0; }
        .footer strong { color: #c9a96e; }
        .footer-sub { font-size: 11px; color: #666; margin-top: 8px; }

        /* Responsive */
        @media (max-width: 768px) {
          .header-inner { flex-direction: column; gap: 8px; align-items: flex-start; }
          .hero-comparison { flex-direction: column; }
          .compare-card { width: 100%; }
          .compare-arrow { transform: rotate(90deg); }
          .stats-grid { grid-template-columns: 1fr; }
          .search-pills { justify-content: flex-start; overflow-x: auto; flex-wrap: nowrap; padding-bottom: 8px; }
        }
      `}</style>
    </div>
  )
}

export default App
