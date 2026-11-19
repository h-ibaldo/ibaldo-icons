'use strict';

const { defineComponent, h } = require('vue');

const CloudMinusRound = defineComponent({
  name: 'CloudMinusRound',
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
          h('path', {"d":"M17.924255383692071,9.093139648438409c-.438171386720569-2.882202148440228-2.919616699220569-5.093139648440228-5.924255371090112-5.093139648440228-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371101026,5.093139648440228-2.318725585930224.434509277339203-4.075744628898974,2.462036132809772-4.075744628898974,4.906860351559772,0,2.761413574209655,2.238525390619543,5,5,5h10c2.761474609369543,0,5-2.238586425790345,5-5,0-2.44482421875-1.757019042970569-4.472351074220569-4.075744628909888-4.906860351559772Z"}),
          h('line', {"x1":"9.000000000001819","y1":"11.999999973497324","x2":"15.000000000001819","y2":"11.999999973497324"})
        ]
      );
  }
});

module.exports = CloudMinusRound;
module.exports.CloudMinusRound = CloudMinusRound;
module.exports.default = CloudMinusRound;
