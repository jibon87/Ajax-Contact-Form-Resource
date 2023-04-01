# Ajax-Contact-Form-Resource live https://jibon87.github.io/Ajax-Contact-Form-Resource/

```
Ajax Contact Form Resource

1.  js--link ---> jquery.min.js

2.  js--link ---> js/contact-form.js

3.  css--link ---> for style  [

                                    /* --------- 
                                Contact-form success and error text
                                --------- */
                                .form-message.success,
                                .form-message.error {
                                    color: #fff;
                                    border: 1px solid #008000e0;
                                    padding: 10px;
                                    display: inline-block;
                                    margin: 5px;
                                    background: #00800061;
                                    border-radius: 5px;
                                }
                                .form-message.error {
                                    border: 1px solid #ff0000de;
                                    background: #ff00008a;
                                }

]

4.  html 
    {
    
        <form id="contact-form" action="mail.php" method="POST" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" name="name" id="name" placeholder="First and Last" required minlength="3" maxlength="25" />
                </div>
                <div class="form-group">
                    <label for="number">phone</label>
                    <input type="number" name="phone" id="number" placeholder="phone" required />
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="your-mail@gmail.com" required />
                </div>
                <div class="form-group">
                    <label for="file">file</label>
                    <input type="file" name="file" id="file" required/> <br />
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" rows="5" placeholder="Type your message here...."></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" class="submit"><i class="far fa-paper-plane"></i>Send</button>
                </div>
            </form>
            <div class="form-message"></div>

    }
    
5.  active js {

}
6.  note [ 

        1.  <form id="contact-form" action="mail.php" method="POST" enctype="multipart/form-data">
        2.  <input name="phone"/>
        3.  <div class="form-message"></div>
        4.  $mailto = '3djibon1@gmail.com';  --> line { 16 }  mail.php
        5.  edit line --> { 10 }  mail.php for name, email, phone etc.
        6.  add new   --> [ . "\r\nLast name = " . $lastname]
        7.  ajax file --> line { 14 }  [url: "mail.php",] file name == mail file.

         ]
