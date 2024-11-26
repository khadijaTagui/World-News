import React from 'react';
 
function Home() {
 
  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
  };
  const sectionStyle = {
    textAlign: 'center',
    margin: 'o.5rem auto',
    padding: '10px',
    maxWidth: '500vh',
    backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/026/236/902/original/breaking-news-lower-third-on-planet-earth-woman-cartoon-reporter-talking-animation-4k-free-video.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };
 
  const headingStyle = {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#b3d8ffce',
  };
 
  const italicStyle = {
    fontStyle: 'normal',
    lineHeight: '1.5',
    color: '#fff',
    textAlign: 'lift 10px', // Align the text to the right
    padding: '0 20px', // Add padding for better readability
  };
 
  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Welcome to World News</h2>
      <p style={italicStyle}>
        <h5>Stay informed about the latest events around the globe.
        World News brings<br/> you up-to-date coverage on
        international affairs or sport, technology,<br />
        entertainment...
        
        <br />
        Explore our curated selection of news articles,
        dive into in-depth stories, <br/>and discover perspectives
        from diverse sources.</h5>
      </p>
            
 
    </section>
  );
};
 
export default Home;
