'use strict';

const { defineComponent, h } = require('vue');

const LockCircle = defineComponent({
  name: 'LockCircle',
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: [Number, String], default: 1.5 }
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: props.size,
          height: props.size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          class: 'icon-design'
        },
        [
          h('circle', {"cx":"11.949462885141656","cy":"12.000000000480213","r":"10"}),
          h('rect', {"x":"7.949462885141656","y":"12.000000000480213","width":"8","height":"5"}),
          h('path', {"d":"M13.949462876412326,12.000000000480213v-3.000001994521881c0-1.104568398117408-.895429607360711-1.999998005478119-1.999998005478119-1.999998005478119h-.000004000001354c-1.104568399970049,0-1.999998008110197.895429610263818-1.999998005479938,1.999998010240233l.000000007149538,3.000001989759767"})
        ]
      );
  }
});

module.exports = LockCircle;
module.exports.LockCircle = LockCircle;
module.exports.default = LockCircle;
