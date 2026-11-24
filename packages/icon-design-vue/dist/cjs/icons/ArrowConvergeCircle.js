'use strict';

const { defineComponent, h } = require('vue');

const ArrowConvergeCircle = defineComponent({
  name: 'ArrowConvergeCircle',
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
          h('path', {"d":"M16 10L14 12L16 14"}),
          h('path', {"d":"M22 12L14 12"}),
          h('path', {"d":"M8 10L10 12L8 14"}),
          h('path', {"d":"M2 12L10 12"}),
          h('path', {"d":"M3.348 17C5.078 19.984 8.301 22 12 22C15.699 22 18.922 19.984 20.652 17"}),
          h('path', {"d":"M20.652 7C18.922 4.016 15.699 2 12 2C8.301 2 5.078 4.016 3.348 7"})
        ]
      );
  }
});

module.exports = ArrowConvergeCircle;
module.exports.ArrowConvergeCircle = ArrowConvergeCircle;
module.exports.default = ArrowConvergeCircle;
