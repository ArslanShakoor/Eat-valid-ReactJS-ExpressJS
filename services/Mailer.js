const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor(subject, content, recipient) {
    super();

    this.from_email = new helper.Email('no-reply@eat-valid.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = new helper.Email(recipients);

    this.addContent(this.body);
    this.personalization(this.recipients);
  }

  personalization(recipients) {
    const personalize = new helper.personalization();
    personalize.addTo(recipients);
    this.addPersonalization(personalize);
  }
  // formatAddresses(recipients) {
  //   return recipients.map({ email })=>{
  //     return new helper.Email(email);
  //   }
  // }
}

module.exports = Mailer;
