'use strict';

const { defineComponent, h } = require('vue');

const BoxTapeArrowUp = defineComponent({
  name: 'BoxTapeArrowUp',
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
          h('rect', {"x":"2","y":"1.999999999998181","width":"20","height":"20","rx":"1","ry":"1"}),
          h('g', {}, [
            h('line', {"x1":"12","y1":"17.999999999998181","x2":"12","y2":"13.999999999998181"}),
            h('polyline', {"points":"11 14.999999999998181 12 13.999999999998181 13 14.999999999998181"})
          ]),
          h('g', {}, [
            h('line', {"x1":"17","y1":"17.999999999998181","x2":"17","y2":"13.999999999998181"}),
            h('polyline', {"points":"16 14.999999999998181 17 13.999999999998181 18 14.999999999998181"})
          ]),
          h('polyline', {"points":"9 1.999999999998181 9 6.999999999998181 15 6.999999999998181 15 1.999999999998181"})
        ]
      );
  }
});

module.exports = BoxTapeArrowUp;
module.exports.BoxTapeArrowUp = BoxTapeArrowUp;
module.exports.default = BoxTapeArrowUp;
