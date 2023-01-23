import React from 'react'
import i1 from '../../images/tedhc1.png'
import i2 from '../../images/tedhc2.png'
import i3 from '../../images/tedhc3.png'
import a2 from '../../images/red.png'
import '../third/third.css'
import MyComponent2 from '../../components/mycomp2/mycomp2'
import Red from '../../images/red.png'
function third() {
  return (
    <div>
   <MyComponent2 image={i1} imagePosition={'right'}  heading={'Togetherness.'} content={'At TEDxVITBhopal, we firmly believe that when we come together as a community, we can turn our wildest dreams into reality. We are a melting pot of diverse ideas, united by the common goal of making a positive impact on the world. Our theme, Infinite Affinities, represents the unbreakable bond that we share and our commitment to fostering unity and collaboration. We understand that we are only human through the humanity of others, and it is through the collective efforts of our community that we can achieve greatness. We invite all members of our community to join us in our mission to create a brighter future for all, by taking action and inspiring others to do the same.'}
   position={'right'}
   imagee={a2}
   button={""}
   posi={'left'}
   />
    <MyComponent2 image={i2} imagePosition={'right'}  heading={'What is TEDx?'} content={'In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxIITPatna, where x = independently organized TED event. At our TEDxIITPatna event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.'}
   position={'right'}
   imagee={a2}
   button={""}
   posi={'left'}
   />
    <MyComponent2 image={i3} imagePosition={'right'}  heading={'TEDxVITBhopal'} content={'Since 2016 TEDxIITPatna has strived to establish momentous and unforgettable events with discussions that have a long-term impact. With a footfall of 1500+ participants in our past events, we have continued to promote creativity and spark conversations even amid a global pandemic.As we reach a semblance of normalcy, this year, we present our fourth edition - Infinite Affinities. We celebrate symbiosis and the independent yet collaborative spirit that allows us to reach new heights. Featuring diverse speakers from various walks of life, we hope to provide an enlightening experience to our community.'}
   position={'right'}
   imagee={a2}
   button={""}
   posi={'left'}
   />
  <br/>
  <br/>
  <br/>
   <center><h1>Interested in becoming a speaker?</h1></center>
   <button >Application</button>
        </div>
  )
}

export default third