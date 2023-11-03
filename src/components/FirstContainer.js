import React from 'react'
function FirstContainer() {
  return (
    <>
      <div id='cnt-1'>   
    {/* <div id='cnt-1' style={{content:'',
                           position:'absolute',
                           background:`url(${img1}) no-repeat center center/cover`,
                           top:'0',
                           left:'0',
                           height:'100vh',
                           width:'100%',
                           zIndex:'-1',
                           opacity:'0.4' }}>   */}
       <section class="section-1">
        <div class="left">
            <div className='inner'>
            <div> Hey, We are <span>PMXians</span> </div>
            <div>AI-powered universal</div>
            <div>Search Engine</div>
            <div id="web">Proximate Solutions</div>
            <div>
                <button>Documentation</button>
                <button>LinkedIn</button>
            </div>
            </div>
        </div>
        <div class="right">
            {/* <img src={img2} alt=""/> */}
        </div>
    </section>                     
    
    </div>
    </>
  )
}

export default FirstContainer
