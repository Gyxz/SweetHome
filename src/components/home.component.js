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
     
       <div className="page_wrapper box" >
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
          <div className="benefits_block">
            <h2>Переваги компанії “Sweethome”</h2>
            <ul>
              <li>
                  <svg class="bi bi-trash" color="white" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
                  </svg>
                <h6>Ідеальна чистота на об’єкті протягом усього ремонту квартири</h6>
              </li>
              <li>
                <svg class="bi bi-wallet" color="white" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.5 3a.5.5 0 00-.5.5v2h5a.5.5 0 01.5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 01.5-.5h5v-2a.5.5 0 00-.5-.5h-13zM15 6.5h-4.551a2.678 2.678 0 01-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 015.551 6.5H1v6a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-6zm-15-3A1.5 1.5 0 011.5 2h13A1.5 1.5 0 0116 3.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5v-9z" clip-rule="evenodd"/>
                </svg>
                <h6>Доступні ціни на ремонт квартир у Львові та Львівській області</h6>
              </li>
              <li>
                <svg class="bi bi-calendar" color="white" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
                </svg>
               <h6>Гнучкий графік роботи, під Ваші побажання та плани</h6>
              </li>
              <li>
                <svg class="bi bi-person" color="white" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/>
                </svg>
                <h6>Безкоштовний виклик фахівця перед замовленням ремонту</h6>
              </li>
              <li>
                <svg class="bi bi-people" color="white" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 00.014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 00.022.004zm7.973.056v-.002.002zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z" clip-rule="evenodd"/>
                </svg>
                <h6>Можливість збільшення кількості майстрів для виконання максимально швидкого ремонту</h6>
              </li>
              <li>
                <svg class="bi bi-server" color="white" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2c0-1.105-2.239-2-5-2S3 .895 3 2s2.239 2 5 2 5-.895 5-2z"/>
                  <path d="M13 3.75c-.322.24-.698.435-1.093.593C10.857 4.763 9.475 5 8 5s-2.857-.237-3.907-.657A4.881 4.881 0 013 3.75V6c0 1.105 2.239 2 5 2s5-.895 5-2V3.75z"/>
                  <path d="M13 7.75c-.322.24-.698.435-1.093.593C10.857 8.763 9.475 9 8 9s-2.857-.237-3.907-.657A4.881 4.881 0 013 7.75V10c0 1.105 2.239 2 5 2s5-.895 5-2V7.75z"/>
                  <path d="M13 11.75c-.322.24-.698.435-1.093.593-1.05.42-2.432.657-3.907.657s-2.857-.237-3.907-.657A4.883 4.883 0 013 11.75V14c0 1.105 2.239 2 5 2s5-.895 5-2v-2.25z"/>
                </svg>
                <h6>Можливість закупки матеріалів за оптовими цінами</h6>
              </li>
              <li>
                <svg class="bi bi-card-list" color="white" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M5 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 8zm0-2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                  <circle cx="3.5" cy="5.5" r=".5"/>
                  <circle cx="3.5" cy="8" r=".5"/>
                  <circle cx="3.5" cy="10.5" r=".5"/>
                </svg>
                <h6>Проводимо весь перелік ремонтних робіт</h6>
              </li>
              
            </ul>
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