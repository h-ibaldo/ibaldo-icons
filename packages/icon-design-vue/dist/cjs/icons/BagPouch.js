'use strict';

const { defineComponent, h } = require('vue');

const BagPouch = defineComponent({
  name: 'BagPouch',
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
          h('path', {"d":"M3.160238702219431,3.999999999998181h17.679522595550225c.640353171760346,0,1.160238702230345.519885530469997,1.160238702230345,1.160238702230345v9.839761297769655c0,2.75957512247-2.24042487753,5-5,5H7c-2.75957512247,0-5-2.24042487753-5-5V5.160238702217612c0-.640353171754324.519885530465107-1.160238702219431,1.160238702219431-1.160238702219431Z"}),
          h('line', {"x1":"9","y1":"7.999999999998181","x2":"15","y2":"7.999999999998181"})
        ]
      );
  }
});

module.exports = BagPouch;
module.exports.BagPouch = BagPouch;
module.exports.default = BagPouch;
