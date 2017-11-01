const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor(subject, content, recipient) {
    super();
    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email('no-reply@eat-valid.com');
    this.setSubject(subject);
    this.body = new helper.Content('text/html', content);
    this.recipients = new helper.Email(recipient);
    this.addContent(this.body);
    this.personalized(this.recipients);
  }

  personalized(recipients) {
    console.log(recipients);
    const personalize = new helper.Personalization();
    personalize.addTo(recipients);
    this.addPersonalization(personalize);
  }

  async send() {
    console.log('send');
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });
    const response = await this.sgApi.API(request);
    return response;
  }
  // formatAddresses(recipients) {
  //   return recipients.map({ email })=>{
  //     return new helper.Email(email);
  //   }
  // }
}

module.exports = Mailer;
