const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ibooshyou@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ibooshyou@gmail.com',
        subject: 'Confirmation of deleted account',
        text: `Hi ${name}, we're sorry to hear you're leaving us. To help us improve our service could you please explain your reasons for leaving?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}