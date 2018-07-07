import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public activecard = 'card1false';
  public activecard2 = 'card2false';
  public activecard3 = 'card3false';
  public activecard4 = 'card4false';
  public card1 = false;
  public card2 = false;
  public card3 = false;
  public card4 = false;
  public atv = 0;

  public setCardStatus(card){
      if(card === "card1"){
        if(!this.card1){
          if(this.atv == 0){
            this.card1 = true;
            this.activecard = "card1true";
            this.atv++;
          }
        }
        else if(this.card1){
          this.card1 = false;
          this.activecard = "card1false";
          this.atv--;
        }
      }
      else if(card === "card2"){
        if(!this.card2){
          if(this.atv == 0){
            this.card2 = true;
            this.activecard2 = "card2true";
            this.atv++;
          }
        }
        else if(this.card2){
          this.card2 = false;
          this.activecard2 = "card2false";
          this.atv--;
        }
      }
      else if(card === "card3"){
        if(!this.card3 ){
          if(this.atv == 0){
            this.card3 = true;
            this.activecard3 = "card3true";
            this.atv++;
          }
        }
        else if(this.card3){
          this.card3 = false;
          this.activecard3 = "card3false";
          this.atv--;
        }
      }
      else if(card === "card4"){
        if(!this.card4){
          if(this.atv == 0){
            this.card4 = true;
            this.activecard4 = "card4true";
            this.atv++;
          }
        }
        else if(this.card4){
          this.card4 = false;
          this.activecard4 = "card4false";
          this.atv--;
        }
      }
  }
}
