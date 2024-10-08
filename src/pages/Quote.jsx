

export default function Quote(){

    return (
        <div className="quote-main">
            <h1>Contact us</h1>
            <form classname="contact-form" id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/{form_id}" method="post">
                <fieldset id="fs-frm-inputs">
                    <label for="full-name">Full Name</label>
                    <input type="text" name="name" id="full-name" placeholder="First and Last" required=""/> <br></br>
                    <label for="email-address">Email Address</label>
                    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required=""/><br></br>
                    <label for="message">Message</label>
                    <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea><br></br>
                    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/><br></br>
                </fieldset>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}