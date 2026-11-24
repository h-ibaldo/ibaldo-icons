'use strict';

const { defineComponent, h } = require('vue');

const AddressBookBound = defineComponent({
  name: 'AddressBookBound',
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
          h('path', {"d":"M3,4.000001999997039v-.000003999997716c0-1.104568388791449.895429604910532-1.999998000001142,1.999997999999323-1.999998000001142h15.000002000000677c.552284749832324,0,1,.447715250169495,1,1v14c0,.552284749830505-.447715250167676,1-1,1H4.999997999999323c-1.104568395088791,0-1.999997999999323.895429604910532-1.999997999999323,1.999998000001142v.000003999997716c0,1.10456839509061.895429604899618,1.999997999992047,1.999997999981133,1.999997999992047l16.000002000018867.000000000009095"}),
          h('circle', {"cx":"12","cy":"8.499999999998181","r":"3"}),
          h('path', {"d":"M17,14.499999999998181c0-1.656854249489697-1.343145750510303-3-3-3h-4c-1.656854249489697,0-3,1.343145750510303-3,3"}),
          h('line', {"x1":"3","y1":"3.999999999998181","x2":"3","y2":"19.999999999998181"})
        ]
      );
  }
});

module.exports = AddressBookBound;
module.exports.AddressBookBound = AddressBookBound;
module.exports.default = AddressBookBound;
