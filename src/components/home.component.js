import React, {Component} from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

(function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = 'https://http-localhost-3000-ojsh2jkzav.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();

export default class Home extends Component {
  render() {
    return (
       <div className="page_wrapper box">
        <div className="content_wrapper content">
          <div className="text_block">
            <h2>Якісний ремонт квартир у Львові від компанії “Sweethome”</h2>
            <p>
              Команда «Sweethome» готова надати клієнтам високоякісні та професійні послуги з проведення малярних, штукатурних і монтажно–будівельних робіт у зручний для вас час. 
              Ми підібрали в надійну і відповідальну команду у Львові тільки кращих майстрів по ремонту квартир, котеджів
              і нежитлового сектора, тому готові за офіційним договором виконати капітальний і локальний ремонт, провести перепланування приміщень
              або швидко покращити дизайн квартири в ході косметичних робіт.
            </p>
          </div>
          <div className="feedback_block">
            <h2>Наші клієнти кажуть:</h2>
            <div id="disqus_thread"></div>
            
          
            {/* <Carousel autoPlay infiniteLoop>
              <div className="block">
                <p className="feedback_text">hfghkjhgkhkghfghkjhgk
                hkghkhgkhgdhfghk
                </p>
                  <h6>fdgkghkhfd</h6>
              </div>
              <div className="block">
                <p className="feedback_text">hfdhfd</p>
                <h6>fdhfd</h6>
              </div>
              <div className="block">
                <p className="feedback_text">hfdhfd</p>
                <h6>fdhfd</h6>
              </div>
            </Carousel> */}
          </div>
        </div>
       </div>
    );
  }
}