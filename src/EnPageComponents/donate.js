import React, { Component } from 'react'
import donate from '../images/z_movie.mp4'
// import donate1 from '../images/maruza2.mp4'
import '../styles/video.css'

class video extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ About us</h1>
      <h3 className='video_cl'> /Last news</h3>
      {/* <span className='text_news'>
      A GOOD WOMAN IMPROVES THE WORLD</span> */}
      <p className='video_text'> 
      Through this video, you can know all the information you are interested in about the Zangiota and the history of the memorial complex built in his name.</p>
      
      <video className='video_mosque' controls >
      <source src={donate} type="video/mp4"/>
     </video>
     { <p className='video_text' > <span className='txt_abror'>Sufism is praying as if you have seen God</span></p>
      }
     {
      <p>Imagine this chain: it has continued continuously since the time of the Messenger of Allah (peace and blessings of Allaah be upon him). Can it be said that the wrong path is those who hold tightly to the links of this chain, who have proven that they are the indispensable servants of God, religion, country and people?
      <p>No, not at all!</p>
      Today, unfortunately, there are those among us who deny Sufism. Such ignorant people deny the ways and lines of the Prophet (peace be upon him) due to their ignorance. Because ignorance throws a person into the abyss.
      <p>There is a proverb: “What a person does not know is his enemy.” Indeed, it turns out that those who today deny Sufism know nothing about it.</p>
      <p>The origin and definition of the words "Sufism" and "Sufi" are different, and the following are recognized:</p>
      The word Sufi comes from the Arabic word "suf" - "wool". Most of the people who went to prayer also wore very simple clothes. Usually their clothes were only made of wool. Since wool is not soft, it was considered the special clothing of the ancients in all centuries. Regarding the monuments of the Prophet, may God bless him and grant him peace, it is reported that he wore woolen clothing.
      <p>Abu Suleiman Dorani says the following about this: “Wool is one of the signs of asceticism. Anyone who wants to wear wool that costs five dirhams should not wear wool that costs three dirhams.”
      The term "Sufism" also arose in relation to ascetics and devotees wearing woolen clothes.</p>
      Gabriel, peace be upon him, asked the Messenger of Allah, may God bless him and grant him peace: “What is Ihsan?” they asked. He, may God bless him and grant him peace, said: “Do not pray to Allah as if you see Him, if you do not see Him as if He sees you.”
      <p>This instruction became the main motto of Sufism.</p>
      Sufism is the purification of the soul, beautiful behavior, bringing the heart to a state where it loves nothing but the love of Allah, and remaining in this status. Also in Sufism there is strict adherence to obligatory, obligatory and forbidden practices. The condition is that every work must be done with sincerity and sincerity, as if seeing Allah Almighty. The words “tarikat”, “leech”, “tazkiyatun nafs” are synonyms of Sufism.
      <p>Hasan Basri, may Allah bless him and grant him peace, says: “We acquired the science of Sufism not by collecting various information, but by leaving the world and its pleasures.”
      </p>
      <p>Sheikh Abu Talib Makki says: “These two sciences are related to each other in the same way that Islam and faith are related to each other. Just as the body and soul are inseparable, they cannot be separated. If it is divided, it will lose its meaning.”
      </p><p>Imam Malik, may God bless him and grant him peace, says: “Whoever studies jurisprudence but does not know Sufism makes mistakes and shortcomings in his actions. Anyone who knows Sufism but does not study jurisprudence will be lost. If he combines both, he will reach the truth and his actions will be acceptable."
      “What is Sufism?” When asked about this, he said: “A noble man being with the noblest people in the best period is a beautiful morality emerging.”
      </p>There are several well-known trends in Sufism, they are also called sects. They are named after the sheikh who founded this sect. The most popular sects are Rifaya, Shaziliya, Qadiriya, Mawlawiya, Yassawiya and Naqshbandiya. The Yassawiyya and Naqshbandi sects are widespread in the Central Asian region. In particular, the Naqshbandi sect is being persecuted in our country. Although the sects differ from each other in some aspects, they comply with Sharia.
      It is unfair to deny such a wonderful path. God forbid, denying Sufism means denying the Sunnah. The consequences of not circumcising are very bad.
      <p className='domla_shokir'>Shokirzhan Domla</p></p>
     }
     {/* <video className='video_mosque' controls >
            <source src={donate1} type="video/mp4" />
          </video> */}
      </div>
      </div>
    );
  }   
}

export default video;