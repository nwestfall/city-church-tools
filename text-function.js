const url = require('url')

exports.handler = async (event) => {
    
    console.log(event)
    
    let buffer = Buffer.from(event.body, 'base64')
    
    var text = buffer.toString('ascii')
    
    console.log(text)
    
    var queryData = url.parse('/sms?' + text, true).query

    var message = "Sorry, we didn't catch that keyword!  Try 'groups', 'baptisms', or 'serve' to get started!"

    switch(queryData.Body.toLowerCase())
    {
        case "jesus":
            message = "We are so excited to hear about your decision to follow Jesus!  We'd like to welcome you to the family with some helpful information - https://bit.ly/2WBJ089"
            break
        case "groups":
        case "group":
            message = "Here at City Church, we are all about gospel-centered community!  Here's how you can get plugged in - http://bit.ly/2WpDVzX"
            break
        case "baptism":
        case "baptisms":
            message = "We're so excited to hear about you wanting to taking your next step in faith through baptism!  Here is some more information about what this means - http://bit.ly/2UgxyvQ\n\nIf you'd like to sign up to be baptized, tap here to get started - http://bit.ly/2UgxyvQ"
            break
        case "serve":
            message = "Serving is great way to get plugged in to the community!  There are many different ways to serve, all listed here - http://bit.ly/2w34Fvm\n\nCheck them out and sign up!"
            break
        case "give":
        case "giving":
            message = "Thanks so much for deciding to give! Here's a link to give online - https://bit.ly/33vnO55"
            break
        case "prayer":
        case "pray":
        case "praying":    
            message = "We would love to be praying for you. Let us know how we can be here: https://bit.ly/39VuxH3"
            break
        case "watch":
        case "live":
        case "watch live":
            message = "Watch us live 11AM every Sunday!  Tap the link to join the experience - http://bit.ly/2x1aUzT"
            break
        case "covid":
        case "covid-19":
        case "covid19":
        case "coronavirus":
            message = "Our number 1 priority is making sure everyone stays safe and healthly.  To find out the changes City Church is making visit https://bit.ly/2WATzIO"
            break
    }            

    const responseBody = `
    <Response>
        <Message>
            ${message}
        </Message>
    </Response>
    `;
    
    console.log(responseBody)

    const response = {
        statusCode: 200,
        body: responseBody,
        headers: {
            'Content-Type': 'application/xml',
        },
    }
    return response
};
