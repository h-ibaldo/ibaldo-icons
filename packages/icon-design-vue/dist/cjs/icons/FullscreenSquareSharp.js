'use strict';

const { defineComponent, h } = require('vue');

const FullscreenSquareSharp = defineComponent({
  name: 'FullscreenSquareSharp',
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
          h('rect', {"x":"1.99999999829015","y":"2.998782736161957","width":"20","height":"18","rx":".999999999997745","ry":".999999999997745","transform":"translate(23.999999996041961 23.997565472862306) rotate(-180)"}),
          h('polyline', {"points":"5.999999998300154 9.998782736161957 5.999999998300154 6.998782736161957 8.999999998210114 6.998782736161957"}),
          h('polyline', {"points":"14.999999998300154 6.998782736252906 17.999999998210114 6.998782736161957 17.999999998300154 9.998782736161957"}),
          h('polyline', {"points":"17.999999998300154 13.998782736161957 17.999999998300154 16.998782736161957 14.999999998390194 16.998782736161957"}),
          h('polyline', {"points":"8.999999998300154 16.998782736071007 5.999999998390194 16.998782736161957 5.999999998300154 13.998782736161957"})
        ]
      );
  }
});

module.exports = FullscreenSquareSharp;
module.exports.FullscreenSquareSharp = FullscreenSquareSharp;
module.exports.default = FullscreenSquareSharp;
