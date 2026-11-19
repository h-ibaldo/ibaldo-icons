'use strict';

const { defineComponent, h } = require('vue');

const ArrowOrbitAxis = defineComponent({
  name: 'ArrowOrbitAxis',
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
          h('path', {"d":"M9 16L12 19L9 21.5"}),
          h('path', {"d":"M12 3L12 3"}),
          h('path', {"d":"M12 7L12 7"}),
          h('path', {"d":"M12 11L12 11"}),
          h('path', {"d":"M17 18.191C19.984 17.152 22 15.219 22 13C22 10.539 19.531 8.43 16 7.504"}),
          h('path', {"d":"M8 7.504C4.469 8.43 2 10.539 2 13C2 16.313 6.477 19 12 19"})
        ]
      );
  }
});

module.exports = ArrowOrbitAxis;
module.exports.ArrowOrbitAxis = ArrowOrbitAxis;
module.exports.default = ArrowOrbitAxis;
