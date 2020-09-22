import React from 'react';
import './Widge.css'

function Widge() {
    return (
        <div className="widge">
            <iframe title="This is a unique title" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F5minutetechnical%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1875607232579227" width="240" 
            height="100%" 
            scrolling="no" 
            frameborder="0"
             allowTransparency="true" 
             allow="encrypted-media"
            style={{border:'none', overflow:'hidden'}}
            
            />
        </div>
    )
}

export default Widge
