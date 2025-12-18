import React , { useEffect } from 'react'
import './Facebook.css'

const Facebook = () => {

    useEffect(() => {
    // Load FB SDK if not already loaded
    if (!window.FB) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0";
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse(); // Parse the plugin if SDK already loaded
    }
  }, []);

  return (
    <div className='facebook'>
      <h2>Visit Our Facebook</h2>
    <p>Check our latest designs, customer feedback, and place your order directly on our Facebook page.</p>

    <div className='facebook_preview'>
        <div
          className="fb-page"
          data-href="https://web.facebook.com/profile.php?id=61580100857348" // replace with your FB page
          data-tabs="timeline"
          data-width="500"
          data-height=""
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        ></div>
    </div>
    </div>
  )
}

export default Facebook
