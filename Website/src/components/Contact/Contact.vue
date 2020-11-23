<template>
  <div>
    <SearchOnTopPage ref="SearchOnTopPage" />
    <NavBar ref="NavBar" />
    <div class="rows-contact-me">
        <div class="row">
            <h1 class="contact-form-title">ИСПРАТЕТЕ НИ ПОРАКА</h1>
            <form id="contact-form" method="post" role="form">
                <div class="controls">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="form_name">Вашето име (задолжително)</label>
                                <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your name" required="required" data-error="Firstname is required.">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>                        
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="form_subject">Предмет</label>
                                <input id="form_subject" type="text" name="subject" class="form-control" placeholder="Please enter your subject">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="form_email">Вашиот Email (задолжително)</label>
                                <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email" required="required" data-error="Valid email is required.">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="form_message">Вашата порака</label>
                                <textarea id="form_message" name="message" class="form-control" placeholder="Your message" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="button-submit" value="">Прати</button>
                        </div>
                    </div>
                </div>
            </form> 
        </div>
    </div>
    <Footer ref="Footer" />
  </div>
</template>

<script>
import SearchOnTopPage from '../HomePage/SearchOnTopPage.vue'
import NavBar from '../HomePage/NavBar.vue'
import Footer from '../HomePage/Footer.vue'
export default {
  name: 'Contact',
  components: {
      SearchOnTopPage,
      NavBar,
      Footer
  }
}
</script>