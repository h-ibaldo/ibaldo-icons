'use strict';

const { defineComponent, h } = require('vue');

const FlameTriangleDrop = defineComponent({
  name: 'FlameTriangleDrop',
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
          h('path', {"d":"M10.719 4.094L2.395 17.719C1.785 18.719 2.504 20 3.676 20L20.324 20C21.496 20 22.215 18.719 21.605 17.719L13.281 4.094C12.695 3.137 11.305 3.137 10.719 4.094Z"}),
          h('path', {"d":"M12 9C10 11 9 12.656 9 14.5C9 16.156 10.344 17 12 17C13.656 17 15 16.156 15 14.5C15 12.656 14 11 12 9"}),
          h('path', {"d":"M12 17L12 15"})
        ]
      );
  }
});

module.exports = FlameTriangleDrop;
module.exports.FlameTriangleDrop = FlameTriangleDrop;
module.exports.default = FlameTriangleDrop;
