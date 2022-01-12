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
import audioClip from "./sounds/Media1.mp3";


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
      this.showSlides(slideIndex += n);  
      document.getElementById("pageNum").innerHTML = "Page " + String(slideIndex-1);
      if(slideIndex == 1){
          document.getElementById("pageNum").innerHTML = "";
      }
      document.getElementById("n").style.display = "none";
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
      if(text == "block"){
          document.getElementById(id).style.display = "none";
      }
      else{
          document.getElementById(id).style.display = "block";
      }
    }
  }

  show(id){
    if(document.getElementById(id)){
      document.getElementById(id).style.display = "block";
    }
  }

  hide(id){
    if(document.getElementById(id)){
      document.getElementById(id).style.display = "none";
    }
  }

  showNext(){
    if(document.getElementById("n")){
      console.log("Hello");
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
                        <img className="image" src={image01}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                        <div id="intro" className="speech sb1">
                            Aujourd’hui, tu vas lire l’histoire « Les enfants de cire. » Sélectionnez la flèche pour passer à la page suivante.
                            <span className="success-checkmark" onClick={() => {this.showNext(); this.hide('intro');}}></span>
                        </div>
                    </div>

                    <div className="input-container">
                        <input className="input-box" placeholder="Enter Name"/>
                        <input className="input-box" placeholder="Enter ID"/>
                        <input className="input-box" placeholder="Enter RA Name"/>
                        <input className="input-box" placeholder="Enter Date"/>
                        <div className="begin-button" onClick={() => this.show('intro')}>Press To Begin</div>
                    </div>
                </div>
                {/* Slide 1 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image02}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Il y a une famille bien heureuse. Ils ne se disputent jamais.
                            <span className="success-checkmark" onClick={this.showNext}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image03}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Ils aident leurs parents à la maison et dans les champs. 
                            <span className="success-checkmark" onClick={this.showNext}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image04}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Mais ils n’ont pas le droit de s’approcher d’un feu.
                            <span className="success-checkmark" onClick={this.showNext}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 4 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image05}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Ils doivent faire tout leur travail pendant la nuit. Puisqu’ils sont faits de cire! Mais un des garçons désire se promener au soleil.
                            <span className="success-checkmark" onClick={this.showNext}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 5 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image06}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Un jour son désir est trop puissant. Ses frères l’avertissent… 
                            <span className="success-checkmark" onClick={this.showNext}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 6 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image07}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Mais c’est trop tard! Il fond au soleil brûlant.
                            <span className="success-checkmark" onClick={this.showNext}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 7 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image08}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Les enfants de cire sont si tristes de voir leur frère fondre.
                            <span className="success-checkmark" onClick={this.showNext}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 8 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image09}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Mais ils font un plan. Ils façonnent le morceau de cire fondue en oiseau.
                            <span className="success-checkmark" onClick={this.showNext}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 9 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image10}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Ils apportent leur frère l’oiseau jusqu’au sommet d’une montagne haute.
                            <span className="success-checkmark" onClick={this.showNext}></span>

                        </p>
                    </div>
                </div>
                {/* Slide 10 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image11}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Et lorsque le soleil se lève, il s’envole vers la lumière du matin en chantant.
                            <span className="success-checkmark" onClick={this.showNext}></span>
                        </p>
                    </div>
                </div>
                {/* Question Slide Intro */}
                <div className="slide fade">
                    <div className="question-prompt-container">
                        <p>Tu as lu l’histoire « Les enfants de cire. » 
                            Sélectionnez le bouton vert « RECORD » et dites-nous l’histoire du
                            début à la fin. Dites-nous tous les événements et détails dont vous
                            vous souvenez.</p>
                    </div>
                    <div className="audio-controls-container">
                        <audio id="story-retel" onPlay={this.updateTime}>
                            <source src={audioClip} type="audio/mpeg" />
                        </audio>
                        <img className="audio-button" id="play" src={play} onClick={this.playQuestion}/>
                        <img className="audio-button" id="pause" style={{display: 'none'}} src={pause} onClick={this.pauseQuestion}/>
                        <p id="audio-time"></p>
                    </div>
                </div>         
                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions littérales</div>
                      <p className="question">1. Qu’est-ce que le frère oiseau fait lorsque le soleil se lève?</p>
                      <p className="question-option" id="1a" onClick={() => this.selectOption("1a", "1")}>a) il fait un plan. </p>
                      <p className="question-option" id="1b" onClick={() => this.selectOption("1b", "1")}>b) il s’envole vers la lumière du matin </p>
                      <p className="question-option" id="1c" onClick={() => this.selectOption("1c", "1")}>c) il se promène </p>
                      <p className="question-option" id="1d" onClick={() => this.selectOption("1d", "1")}>d) il aide ses parents </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">2. Pourquoi est-ce que les enfants de cire sont si tristes? </p>
                      <p className="question-option" id="2a" onClick={() => this.selectOption("2a", "2")}>a) parce qu’ils ont une famille bien heureuse.  </p>
                      <p className="question-option" id="2b" onClick={() => this.selectOption("2b", "2")}>b) parce qu’ils aident leurs parents à la maison.  </p>
                      <p className="question-option" id="2c" onClick={() => this.selectOption("2c", "2")}>c) parce que leur frère fond au soleil brûlant.</p>
                      <p className="question-option" id="2d" onClick={() => this.selectOption("2d", "2")}>d) parce que leur frère l’oiseau s’envole. </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">3. Que font les frères à la maison? </p>
                      <p className="question-option" id="3a" onClick={() => this.selectOption("3a", "3")}>a) ils font du feu. </p>
                      <p className="question-option" id="3b" onClick={() => this.selectOption("3b", "3")}>b) ils se disputent. </p>
                      <p className="question-option" id="3c" onClick={() => this.selectOption("3c", "3")}>c) ils aident leurs parents. </p>
                      <p className="question-option" id="3d" onClick={() => this.selectOption("3d", "3")}>d) ils se promènent au soleil. </p>
                    </div>
                  </div>
                </div>
                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions à inférences </div>
                      <p className="question">4. Pourquoi est-ce que les enfants ne peuvent pas s’approcher d’un feu?</p>
                      <p className="question-option" id="4a" onClick={() => this.selectOption("4a", "4")}>a) parce qu’ils travaillent la nuit. </p>
                      <p className="question-option" id="4b" onClick={() => this.selectOption("4b", "4")}>b) parce qu’ils sont heureux. </p>
                      <p className="question-option" id="4c" onClick={() => this.selectOption("4c", "4")}>c) parce qu’ils sont faits de cire. </p>
                      <p className="question-option" id="4d" onClick={() => this.selectOption("4d", "4")}>d) parce qu’ils aident leurs parents. </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">5. Quelle est la morale de l’histoire? </p>
                      <p className="question-option" id="5a" onClick={() => this.selectOption("5a", "5")}>a) que les enfants sont faits de cire. </p>
                      <p className="question-option" id="5b" onClick={() => this.selectOption("5b", "5")}>b) que les enfants doivent écouter leurs parents. </p>
                      <p className="question-option" id="5c" onClick={() => this.selectOption("5c", "5")}>c) que les enfants n’aiment pas le soleil. </p>
                      <p className="question-option" id="5d" onClick={() => this.selectOption("5d", "5")}>d) que les enfants peuvent faire un oiseau avec de la cire. </p>
                    </div>
                    <div className='question-box'>
                    <p className="question">6. Pourquoi est-ce que les frères avertissent leur frère? </p>
                      <p className="question-option" id="6a" onClick={() => this.selectOption("6a", "6")}>a) parce qu’il va aider leurs parents dans les champs. </p>
                      <p className="question-option" id="6b" onClick={() => this.selectOption("6b", "6")}>b) parce qu’il va fondre  au soleil s’il sort. </p>
                      <p className="question-option" id="6c" onClick={() => this.selectOption("6c", "6")}>c) parce qu’il va manger. </p>
                      <p className="question-option" id="6d" onClick={() => this.selectOption("6d", "6")}>d) parce qu’il va faire un plan. </p>
                    </div>
                  </div>
                </div>
                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions de vocabulaire </div>
                      <p className="question">7. Que signifie cire dans le texte: Ils doivent faire tout leur travail pendant la nuit. Puisqu’ils sont faits de cire!</p>
                      <p className="question-option" id="7a" onClick={() => this.selectOption("7a", "7")}>a) cire signifie: de glace </p>
                      <p className="question-option" id="7b" onClick={() => this.selectOption("7b", "7")}>b) cire signifie: ce qu’on utilise pour cuisiner </p>
                      <p className="question-option" id="7c" onClick={() => this.selectOption("7c", "7")}>c) cire signifie: ce qu’on utilise pour faire une chandelle </p>
                      <p className="question-option" id="7d" onClick={() => this.selectOption("7d", "7")}>d) cire signifie: de gentillesse </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">8. Que signifie fondre dans le texte:  Les enfants de cire sont si tristes de voir leur frère fondre. </p>
                      <p className="question-option" id="8a" onClick={() => this.selectOption("8a", "8")}>a) fondre signifie: devenir solide </p>
                      <p className="question-option" id="8b" onClick={() => this.selectOption("8b", "8")}>b) fondre signifie: devenir froid </p>
                      <p className="question-option" id="8c" onClick={() => this.selectOption("8c", "8")}>c) fondre signifie: se perdre </p>
                      <p className="question-option" id="8d" onClick={() => this.selectOption("8d", "8")}>d) fondre signifie: devenir liquide </p>
                    </div>
                  </div>
                </div>

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
