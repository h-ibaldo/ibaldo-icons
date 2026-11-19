'use strict';

const { defineComponent, h } = require('vue');

const Accessibility = defineComponent({
  name: 'Accessibility',
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
          h('circle', {"cx":"11.999999994010068","cy":"3.997565472760471","r":"2"}),
          h('polyline', {"points":"3.999999994010068 6.997565472760471 8.999999994010068 8.997565472712267 14.999999994010068 8.997565472712267 19.999999994010068 6.997565472760471"}),
          h('polyline', {"points":"8.999999994010068 8.997565472712267 8.999999994010068 14.997565472712267 6.999999994010068 21.997565472760471"}),
          h('polyline', {"points":"14.999999993649908 8.997565472760471 14.999999993829988 14.997565472760471 16.999999994010068 21.997565472712267"}),
          h('line', {"x1":"8.999999994010068","y1":"14.997565472712267","x2":"14.999999994010068","y2":"14.997565472712267"})
        ]
      );
  }
});

module.exports = Accessibility;
module.exports.Accessibility = Accessibility;
module.exports.default = Accessibility;
