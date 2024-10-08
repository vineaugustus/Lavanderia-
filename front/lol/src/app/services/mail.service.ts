import { Injectable, Inject } from '@angular/core';
// import * as nodemailer from "nodemailer";
import config from '../configs/config';

export const TO_TOKEN = 'ToToken';
export const SUBJECT_TOKEN = 'SubjectToken';
export const MESSAGE_TOKEN = 'MessageToken';

@Injectable({
  providedIn: 'root'
})

export class MailService {

  constructor(
    @Inject(TO_TOKEN) public to? : string,
    @Inject(SUBJECT_TOKEN) public subject?: string,
    @Inject(MESSAGE_TOKEN) public message? : string
  ) { }

  sendMail() {
  //   let mailOptions = {
  //     from: "lavanderiaonline@lol.com",
  //     to: this.to,
  //     subject: this.subject,
  //     html: this.message
  //   };

  //   const transporter = nodemailer.createTransport({
  //     host: config.host,
  //     port: config.port,
  //     secure: false,
  //     auth: {
  //       user: config.user,
  //       pass: config.password
  //     },
  //     tls: {rejectUnauthorized: false} 
  //   });


  //   console.log(mailOptions);

  //   transporter.sendMail(mailOptions, function (error, info){
  //     if (error) {
  //       return error;
  //     } else {
  //       return "Email enviado com sucesso "
  //     }
  //   });
  }
}

export default new MailService;
