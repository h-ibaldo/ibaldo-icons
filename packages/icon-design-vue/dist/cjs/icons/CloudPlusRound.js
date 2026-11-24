'use strict';

const { defineComponent, h } = require('vue');

const CloudPlusRound = defineComponent({
  name: 'CloudPlusRound',
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
          h('path', {"d":"M17.924255360310781,9.093139648438409c-.438171386707836-2.882202148440228-2.919616699207836-5.093139648440228-5.924255371090112-5.093139648440228-3.004638671867724,0-5.486083984367724,2.2109375-5.924255371088293,5.093139648440228-2.318725585939319.434509277339203-4.075744628911707,2.462036132809772-4.075744628911707,4.906860351559772,0,2.761413574209655,2.238525390632276,5,5,5h10c2.761474609382276,0,5-2.238586425790345,5-5,0-2.44482421875-1.75701904296875-4.472351074220569-4.075744628909888-4.906860351559772Z"}),
          h('line', {"x1":"8.999999976622348","y1":"11.999999973497324","x2":"14.999999976622348","y2":"11.999999973497324"}),
          h('line', {"x1":"11.999999976622348","y1":"8.999999973497324","x2":"11.999999976622348","y2":"14.999999973497324"})
        ]
      );
  }
});

module.exports = CloudPlusRound;
module.exports.CloudPlusRound = CloudPlusRound;
module.exports.default = CloudPlusRound;
