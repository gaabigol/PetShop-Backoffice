import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { UserModel } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';
import { SecurityUtil } from '../../../utils/security';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public hide = true;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private service: DataService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.required
      ])],
      password: [  '', Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.required,
        ]),
      ],
    });
  }

  ngOnInit() {}

  async submit() {
    if (this.form.invalid) return;

    const loading = await this.loadingCtrl.create({
      message: 'Autenticando...',
    });
    loading.present();

    this.service.authenticate(this.form.value).subscribe(
      (data: any) => {
        SecurityUtil.set(data);
        loading.dismiss();
        this.navCtrl.navigateRoot('/');
      },
      (error: any) => {
        this.showError('Usuário ou Senha inválidos');
        loading.dismiss();
      }
    );
  }

  async resetPassword() {
    if (this.form.controls['username'].invalid) {
      this.showError('Usuário inválido');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Restaurando sua senha...',
    });
    loading.present();
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  async showError(message: string) {
    const error = await this.toastCtrl.create({
      message: message,
      buttons: [{ text: 'Fechar', role: 'cancel' }],
      duration: 3000,
    });
    error.present();
  }
}
