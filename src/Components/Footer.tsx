
function Footer() {
    return (
<footer style={{ padding: '20px', backgroundColor: '#2b2b2b', color: 'white' }}>
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h3>About</h3>
      <p>Your Crypto Platform. Explore the world of cryptocurrencies with us.</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h3>Follow Us</h3>
      <div style={{ paddingTop: '10px' }}>
        <span style={{ color: 'white', cursor: 'pointer', marginRight: '10px' }}>GitHub</span>
        <span style={{ color: 'white', cursor: 'pointer', marginRight: '10px' }}>Instagram</span>
        <span style={{ color: 'white', cursor: 'pointer', marginRight: '10px' }}>Facebook</span>
        <span style={{ color: 'white', cursor: 'pointer' }}>YouTube</span>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h3>Cryptocurrencies</h3>
      <p>Bitcoin, Ethereum, XRP, and more...</p>
    </div>
  </div>
</footer>
    )}

export default Footer;