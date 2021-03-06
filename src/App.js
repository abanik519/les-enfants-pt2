import React, { Component } from 'react';
import './App.css';
import image01 from "./images/01.jpg";
import image02 from "./images/02.jpg";
import image03 from "./images/03.jpg";
import image04 from "./images/04.jpg";
import image05 from "./images/05.jpg";
import image06 from "./images/06.jpg";
import image07 from "./images/07.jpg";
import image08 from "./images/08.jpg";
import image09 from "./images/09.jpg";
import image10 from "./images/10.jpg";
import image11 from "./images/11.jpg";
import avatar from "./images/Avatar.png";
import pause from "./images/pause.png";
import play from "./images/play.png";
import audioClip from "./sounds/end.mp3";
import introClip from "./sounds/intro.mp3";
import s1 from "./images/s1.jpg";
import s2 from "./images/s2.jpg";
import s3 from "./images/s3.jpg";
import s4 from "./images/s4.jpg";
import s5 from "./images/s5.jpg";
import s6 from "./images/s6.jpg";
import s7 from "./images/s7.jpg";
import s8 from "./images/s8.jpg";
import s9 from "./images/s9.jpg";
import s10 from "./images/s10.jpg";


var slideIndex = 1;
export class App extends Component {
  constructor(props){
    super();
    this.firstQ = React.createRef();
  }

  componentDidUpdate(){
    this.showSlides(slideIndex);
  }


  showSlides(n) {
    if(document.getElementById('book')){
      var i;
      var slides =  Array.from(document.getElementsByClassName("slide"));
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "flex";
    }
  }

  plusSlides(n) {
    if(document.getElementById("pageNum")){
      var sound = document.getElementById('intro-sound');
      if(!sound.paused){
        sound.pause();
      }
      this.showSlides(slideIndex += n);  
      document.getElementById("pageNum").innerHTML = String(slideIndex-1);
      if(slideIndex == 1){
          document.getElementById("pageNum").innerHTML = "";
      }
      if(n > 0){
        document.getElementById("n").style.display = "none";
      }
      else{
        document.getElementById("n").style.display = "block";
      }
      if(slideIndex >= 3){
          document.getElementById("p").style.display = "block";
      }
      else{
          document.getElementById("p").style.display = "none";
      }
    }
  }

  toggle(id){
    if(document.getElementById(id)){
      var text = document.getElementById(id).style.display;
      if(text == "flex"){
          document.getElementById(id).style.display = "none";
      }
      else{
          document.getElementById(id).style.display = "flex";
      }
    }
  }

  show(id){
    if(document.getElementById(id)){
      document.getElementById(id).style.display = "block";
    }
  }

  toggleSound(id){
    var sound = document.getElementById(id);
    if(sound.paused || sound.duration == 0){
      sound.play();
    }
    else{
      sound.pause();
    }
  }

  hide(id){
    if(document.getElementById(id)){
      document.getElementById(id).style.display = "none";
    }
  }

  showNext(){
    if(document.getElementById("n")){
      document.getElementById("n").style.display = "block";
    }
  }

  playQuestion(){
    if(document.getElementById("story-retel") && document.getElementById("pause") && document.getElementById("play")){
      var question = document.getElementById("story-retel");
      console.log(question.duration);
      document.getElementById("pause").style.display = "block";
      document.getElementById("play").style.display = "none";
      question.play();
    }
  }

  updateTime(){
    var question = document.getElementById("story-retel");
    document.getElementById("audio-time").innerHTML = question.currentTime
  }

  pauseQuestion(){
    if(document.getElementById("story-retel") && document.getElementById("pause") && document.getElementById("play")){
      var question = document.getElementById("story-retel");
      console.log(question.currentTime);
      document.getElementById("pause").style.display = "none";
      document.getElementById("play").style.display = "block";
      question.pause();
    }
  }

  selectOption(id, num){
    var options =  ["a", "b", "c", "d"];
    for(var i = 0; i < options.length; i++){
      var optionId = num + options[i];
      document.getElementById(optionId).style.fontWeight = "normal";
    }
    document.getElementById(id).style.fontWeight = "bold";
  }

  record(){
    if(document.getElementById("recordButton")){
      if(document.getElementById("recordButton").innerHTML == "ENREGISTRER"){
        document.getElementById("recordButton").innerHTML = "PAUSE"
      }
      else{
        document.getElementById("recordButton").innerHTML = "ENREGISTRER"
      }
    }
  }

  render() {
    return (
      <div id='book'>
        {/* Slideshow container */}
        <div className="phoneText">Not available on this device</div>

        <div className="slideshow-container">
            <div className="title">Les  enfants de cire</div>
            <div className="slide-container">
                <div className="arrow-container">
                    <div className="next" id="p" onClick={() => this.plusSlides(-1)}>&#10094;</div>
                </div>

                {/* Slides */}
                {/* Intro Slide */}
                <div className="slide fade" style={{display: "flex"}}>
                    <div className="image-container">
                        <img className="image" src={image01} alt="Intro page image"/>
                        <div className="avatar-container">
                          <div className="flex-row">
                            <img className="avatar" src={avatar} onClick={() => {this.show('intro'); this.toggleSound('intro-sound'); this.hide('click1'); this.showNext();}}/>
                            <i id="click1" class="fa fa-arrow-left">&larr;Appuie ici</i>
                          </div>
                        </div>
                        <audio id="intro-sound">
                            <source src={introClip} type="audio/mpeg" />
                        </audio>
                        <div id="intro" className="speech sb1">
                          Aujourd???hui, tu vas lire l???histoire ?? Les enfants de cire. ?? Appuie sur la fl??che pour passer ?? la page suivante. Today you will read the story ???Les enfants de cire???. Click on the arrow to move to the next page.
                        </div>
                    </div>

                </div>
                {/* Slide 1 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image02} alt="First page image"/>
                        <div className="avatar-container">
                          <div className="flex-row">
                            <img className="avatar" src={avatar} onClick={() => {this.toggle('s1'); this.hide('click2'); this.showNext()}}/>
                            <i id="click2" class="fa fa-arrow-left">&larr;Appuie ici</i>
                          </div>
                          <p>Il y a une famille bien heureuse. <span className="highlight">Ils</span> ne <span className="highlight">se disputent</span> jamais.</p>
                          <div id="s1" className="speech2" alt="Two people arguing">
                            ils se disputent: ils se battent
                            <img className="popup-image" src={s1}/>
                          </div>
                        </div>
                    </div>



                </div>
                {/* Slide 2 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image03} alt="Second page image"/>
                        <div className="avatar-container">
                            <div className="flex-row">
                              <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.hide('click3'); this.toggle('s2')}}/>
                              <i id="click3" class="fa fa-arrow-left">&larr;Appuie ici</i>
                            </div>
                            <p>Ils aident leurs parents ?? la maison et dans <span className="highlight">les champs</span>.</p>
                            <div id="s2" className="speech2" alt="a field">
                              les champs: un???grand morceau de terre pour faire pousser des plantes <br/>
                              <img className="popup-image" src={s2}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image04} alt="Third page image"/>
                        <div className="avatar-container">
                            <div className="flex-row">
                              <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.hide('click4'); this.toggle('s3')}}/>
                              <i id="click4" class="fa fa-arrow-left">&larr;Appuie ici</i>
                            </div>
                            <p>Mais ils n???ont pas le droit de <span className="highlight">s???approcher</span> d???un feu.
                            </p>
                            <div id="s3" className="speech2" alt="Two people walking closer">
                            s???approcher: aller plus pr??s <br/>
                              <img className="popup-image" src={s3}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 4 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image05} alt="Fourth page image"/>
                        <div className="avatar-container">
                            <div className="flex-row">
                              <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.hide('click5'); this.toggle('s4')}}/>
                              <i id="click5" class="fa fa-arrow-left">&larr;Appuie ici</i>
                            </div>
                            <p>Ils doivent faire tout leur travail pendant la nuit. Puisqu???ils sont faits de <span className="highlight">cire</span>! Mais un des gar??ons d??sire se promener au soleil.
                            </p>
                            <div id="s4" className="speech2" alt="A candle">
                            cire: une chandelle est faite de cire <br/>
                              <img className="popup-image" src={s4}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 5 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image07} alt="Fifth page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.toggle('s5')}}/>
                            <p>Un jour son d??sir est trop <span className="highlight">puissant</span>. Ses fr??res l???avertissent??? 
                            </p>
                            <div id="s5" className="speech2" alt="A person showing how strong he is">
                            puissant: fort  <br/>
                              <img className="popup-image" src={s5}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 6 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image08} alt="Sixth page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}  onClick={() => {this.showNext(); this.toggle('s6')}}/>
                            <p>Mais c???est trop tard! Il fond au soleil <span className="highlight">br??lant</span>.
                            </p>
                            <div id="s6" className="speech2" alt="Person who is very warm">
                            br??lant: tr??s chaud <br/>
                              <img className="popup-image" src={s6}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 7 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image09} alt="Seventh page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.toggle('s7')}}/>
                            <p>Les enfants de cire sont si tristes de voir leur fr??re <span className="highlight" >fondre</span>.
                            </p>
                            <div id="s7" className="speech2" alt="Ice cubes">
                            fondre: devenir??? liquide <br/>
                              <img className="popup-image" src={s7}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 8 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image10} alt="Eight page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.toggle('s8')}}/>
                            <p>Mais ils font un plan. Ils <span className="highlight">fa??onnent</span> le morceau de cire fondue en oiseau.
                            </p>
                            <div id="s8" className="speech2" alt="A couple of kids doing arts and crafts">
                            ils fa??onnent: ils fabriquent <br/>
                              <img className="popup-image" src={s8}/>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Slide 9 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image11} alt="Ninth page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.toggle('s9')}}/>
                            <p>Ils apportent leur fr??re l???oiseau jusqu???<span className="highlight">au sommet d???</span>une montagne haute.
                            </p>
                            <div id="s9" className="speech2" alt="A person standing on the top of a mountain">
                            au sommet de: en haut de <br/>
                              <img className="popup-image" src={s9}/>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Slide 10 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image01} alt="Tenth page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} onClick={() => {this.showNext(); this.toggle('s10')}}/>
                            <p>Et lorsque le soleil se l??ve, <span className="highlight">il s???envole</span> vers la lumi??re du matin en chantant.
                            </p>
                            <div id="s10" className="speech2" alt="A bird flying">
                            il s???envole: il prend son vol<br/>
                              <img className="popup-image" src={s10}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Question Slide Intro */}
                <div className="slide fade">
                    <div className="question-prompt-container">
                        <p>Tu as lu l???histoire ?? Les enfants de cire. ?? Appuie sur le bouton vert ?? ENREGISTRER ?? et raconte-moi l???histoire du d??but ?? la fin. Dis-moi tous les ??v??nements et d??tails dont tu te souviens. You have read the story "Les enfants de cire". Press the green "ENREGISTRER" button and tell us the story from the beginning to the end. Include all the events and details that you can remember. 
                        </p>
                    </div>
                    <div className="audio-controls-container">
                        <audio id="story-retel" onPlay={this.updateTime}>
                            <source src={audioClip} type="audio/mpeg" />
                        </audio>
                        <img className="audio-button" id="play" src={play} onClick={() => {this.playQuestion(); this.showNext()}}/>
                        <img className="audio-button" id="pause" style={{display: 'none'}} src={pause} onClick={this.pauseQuestion}/>
                        <div id='recordButton' onClick={this.record}>ENREGISTRER</div>
                    </div>
                </div>      
                <div className="slide fade">
                    <div className="linkContainer">
                    <a href='https://rotman.az1.qualtrics.com/jfe/form/SV_a03WKuBNMM3u8dg'><button className='linkBox'>Click here for comprehension test</button></a>
                    </div>
                </div>   

                {/*
                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions litt??rales</div>
                      <p className="question">1. Qu???est-ce que le fr??re oiseau fait lorsque le soleil se l??ve?</p>
                      <p className="question-option" id="1a" onClick={() => this.selectOption("1a", "1")}>a) il fait un plan. </p>
                      <p className="question-option" id="1b" onClick={() => this.selectOption("1b", "1")}>b) il s???envole vers la lumi??re du matin </p>
                      <p className="question-option" id="1c" onClick={() => this.selectOption("1c", "1")}>c) il se prom??ne </p>
                      <p className="question-option" id="1d" onClick={() => this.selectOption("1d", "1")}>d) il aide ses parents </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">2. Pourquoi est-ce que les enfants de cire sont si tristes? </p>
                      <p className="question-option" id="2a" onClick={() => this.selectOption("2a", "2")}>a) parce qu???ils ont une famille bien heureuse.  </p>
                      <p className="question-option" id="2b" onClick={() => this.selectOption("2b", "2")}>b) parce qu???ils aident leurs parents ?? la maison.  </p>
                      <p className="question-option" id="2c" onClick={() => this.selectOption("2c", "2")}>c) parce que leur fr??re fond au soleil br??lant.</p>
                      <p className="question-option" id="2d" onClick={() => this.selectOption("2d", "2")}>d) parce que leur fr??re l???oiseau s???envole. </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">3. Que font les fr??res ?? la maison? </p>
                      <p className="question-option" id="3a" onClick={() => this.selectOption("3a", "3")}>a) ils font du feu. </p>
                      <p className="question-option" id="3b" onClick={() => this.selectOption("3b", "3")}>b) ils se disputent. </p>
                      <p className="question-option" id="3c" onClick={() => this.selectOption("3c", "3")}>c) ils aident leurs parents. </p>
                      <p className="question-option" id="3d" onClick={() => this.selectOption("3d", "3")}>d) ils se prom??nent au soleil. </p>
                    </div>
                  </div>
                </div>
                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions ?? inf??rences </div>
                      <p className="question">4. Pourquoi est-ce que les enfants ne peuvent pas s???approcher d???un feu?</p>
                      <p className="question-option" id="4a" onClick={() => this.selectOption("4a", "4")}>a) parce qu???ils travaillent la nuit. </p>
                      <p className="question-option" id="4b" onClick={() => this.selectOption("4b", "4")}>b) parce qu???ils sont heureux. </p>
                      <p className="question-option" id="4c" onClick={() => this.selectOption("4c", "4")}>c) parce qu???ils sont faits de cire. </p>
                      <p className="question-option" id="4d" onClick={() => this.selectOption("4d", "4")}>d) parce qu???ils aident leurs parents. </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">5. Quelle est la morale de l???histoire? </p>
                      <p className="question-option" id="5a" onClick={() => this.selectOption("5a", "5")}>a) que les enfants sont faits de cire. </p>
                      <p className="question-option" id="5b" onClick={() => this.selectOption("5b", "5")}>b) que les enfants doivent ??couter leurs parents. </p>
                      <p className="question-option" id="5c" onClick={() => this.selectOption("5c", "5")}>c) que les enfants n???aiment pas le soleil. </p>
                      <p className="question-option" id="5d" onClick={() => this.selectOption("5d", "5")}>d) que les enfants peuvent faire un oiseau avec de la cire. </p>
                    </div>
                    <div className='question-box'>
                    <p className="question">6. Pourquoi est-ce que les fr??res avertissent leur fr??re? </p>
                      <p className="question-option" id="6a" onClick={() => this.selectOption("6a", "6")}>a) parce qu???il va aider leurs parents dans les champs. </p>
                      <p className="question-option" id="6b" onClick={() => this.selectOption("6b", "6")}>b) parce qu???il va fondre  au soleil s???il sort. </p>
                      <p className="question-option" id="6c" onClick={() => this.selectOption("6c", "6")}>c) parce qu???il va manger. </p>
                      <p className="question-option" id="6d" onClick={() => this.selectOption("6d", "6")}>d) parce qu???il va faire un plan. </p>
                    </div>
                  </div>
                </div>
                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions de vocabulaire </div>
                      <p className="question">7. Que signifie cire dans le texte: Ils doivent faire tout leur travail pendant la nuit. Puisqu???ils sont faits de cire!</p>
                      <p className="question-option" id="7a" onClick={() => this.selectOption("7a", "7")}>a) cire signifie: de glace </p>
                      <p className="question-option" id="7b" onClick={() => this.selectOption("7b", "7")}>b) cire signifie: ce qu???on utilise pour cuisiner </p>
                      <p className="question-option" id="7c" onClick={() => this.selectOption("7c", "7")}>c) cire signifie: ce qu???on utilise pour faire une chandelle </p>
                      <p className="question-option" id="7d" onClick={() => this.selectOption("7d", "7")}>d) cire signifie: de gentillesse </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">8. Que signifie fondre dans le texte:  Les enfants de cire sont si tristes de voir leur fr??re fondre. </p>
                      <p className="question-option" id="8a" onClick={() => this.selectOption("8a", "8")}>a) fondre signifie: devenir solide </p>
                      <p className="question-option" id="8b" onClick={() => this.selectOption("8b", "8")}>b) fondre signifie: devenir froid </p>
                      <p className="question-option" id="8c" onClick={() => this.selectOption("8c", "8")}>c) fondre signifie: se perdre </p>
                      <p className="question-option" id="8d" onClick={() => this.selectOption("8d", "8")}>d) fondre signifie: devenir liquide </p>
                    </div>
                  </div>
                </div> */}

                <div className="arrow-container">
                    <div className="next" id="n" onClick={() => this.plusSlides(1)}>&#10095;</div>
                </div>
            </div>

            
            <div className="pageNum-container">
                <p id="pageNum"></p>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
