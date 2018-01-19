import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams, AlertController, ToastController, ModalController,
  Platform
} from 'ionic-angular';
import {QuestionPage} from "../question/question";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  public menuTitle = 'ជីវវិទ្យា​ ថ្នាក់​ទី​១២';
  public menuID;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private platform: Platform, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    typeof this.navParams.get('menuID') == 'undefined' ? this.menuID = 'root' : this.menuID = this.navParams.get('menuID');
    typeof this.navParams.get('title') != 'undefined' ? this.menuTitle = this.navParams.get('title') : true;
  }

  public menu(id, title) {
    this.navCtrl.push(
        MenuPage, {
          menuID: id,
          title: title
        });
  }

  public unit(id) {
    this.navCtrl.push(
        QuestionPage, {
          unitID: id
        }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  private playButtonClick() {
    let toast = this.toastCtrl.create({
      message: 'This application is demo version.',
      duration: 3000
    });
    toast.present();
  }

  private exitButtonClick() {
    let alert = this.alertCtrl.create({
      title: 'ចាកចេញ',
      message: 'តើ​អ្នក​ពិត​ជា​ចង់​ចាក​ចេញ​ពី​កម្មវិធី​នេះ?​',
      buttons: [
        {
          text: "ទេ",
          role: 'cancel'
        },
        {
          text: "បាទ​ / ចាស",
          handler: () => {
            this.platform.exitApp();
          }
        },
      ]
    });
    alert.present();
  }

}
