'use strict';

const { defineComponent, h } = require('vue');

const BoxOpenRaised = defineComponent({
  name: 'BoxOpenRaised',
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
          h('polygon', {"points":"14 15.999999999998181 22 12.999999999998181 20 8.999999999998181 12 11.999999999998181 14 15.999999999998181"}),
          h('polyline', {"points":"12 5.999999999998181 10 1.999999999998181 2 4.999999999998181 4 8.999999999998181"}),
          h('polyline', {"points":"12.000000000045475 6.000000000218279 13.999999999865395 2.000000000127329 22 4.999999999778083 20.00000000018008 8.999999999869033"}),
          h('line', {"x1":"20","y1":"8.999999999998181","x2":"12","y2":"5.999999999998181"}),
          h('polygon', {"points":"10.000000000134605 15.999999999998181 2 13.000000000358341 3.999999999776264 9.000000000138243 11.99999999991087 11.999999999778083 10.000000000134605 15.999999999998181"}),
          h('line', {"x1":"3.999999999776264","y1":"9.000000000138243","x2":"11.999999999641659","y2":"5.999999999778083"}),
          h('polyline', {"points":"4 13.749999999998181 4 18.999999999998181 12 21.999999999998181 20 18.999999999998181 20 13.749999999998181"})
        ]
      );
  }
});

module.exports = BoxOpenRaised;
module.exports.BoxOpenRaised = BoxOpenRaised;
module.exports.default = BoxOpenRaised;
