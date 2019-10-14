import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'alert',
  initialize() {



    withPluginApi('0.8.34', api => {
      // api.onPageChange(() => {
      //   window.addEventListener("load", function(event) {
      //     console.log(document.getElementsByClassName('username').length);

      //     // Post names
      //     Array.prototype.forEach.call(document.getElementsByClassName('username'), function(element) {
      //       element.innerText = element.innerText.replace('_',' ')
      //     })

      //   });
      //   window.addEventListener('DOMContentLoaded', function(event) {console.log('aa')})
      //   console.log('navigation')
      //   console.log(document.getElementsByClassName('username').length);


      // });
      console.log(api)
      api.formatUsername(username => username.replace('_',' '));

    });


  }
};
