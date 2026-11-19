'use strict';

const { defineComponent, h } = require('vue');

const Browser = defineComponent({
  name: 'Browser',
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
          h('rect', {"x":"1.99999999963984","y":"1.999999996951374","width":"20","height":"20","rx":"1.999999999997272","ry":"1.999999999997272"}),
          h('line', {"x1":"21.99999999981992","y1":"7.999999997398845","x2":"1.99999999981992","y2":"7.999999996503902"}),
          h('line', {"x1":"8.009999999640058","y1":"4.99999999726424","x2":"7.99999999963984","y2":"4.99999999726424"}),
          h('line', {"x1":"18.99999999963984","y1":"4.99999999726424","x2":"10.99999999963984","y2":"4.99999999726424"}),
          h('line', {"x1":"5.009999999640058","y1":"4.999999997129635","x2":"4.99999999963984","y2":"4.999999997129635"})
        ]
      );
  }
});

module.exports = Browser;
module.exports.Browser = Browser;
module.exports.default = Browser;
