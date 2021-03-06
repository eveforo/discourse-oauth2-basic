import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'usernameFormatter',
  initialize() {
    withPluginApi('0.8.34', api => {
      // Remueve underscore del username
      api.formatUsername(username => username.replace('_',' '));
    });
  }
};
