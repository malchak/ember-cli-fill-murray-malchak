import Ember from 'ember';

export default Ember.Component.extend({
  height: 100,
  width: 100,
  
  src: Ember.computed('height', 'width', function () {
    var base = 'http://www.fillmurray.com/'
    return base + this.get('height') + '/' + this.get('width');
  })
});
