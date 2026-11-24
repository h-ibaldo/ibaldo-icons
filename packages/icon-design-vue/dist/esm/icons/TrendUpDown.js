import { defineComponent, h } from 'vue';

const TrendUpDown = defineComponent({
  name: 'TrendUpDown',
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
          h('path', {"d":"M2 14L9 8L13 12L22 3"}),
          h('path', {"d":"M16 15L22 21"}),
          h('path', {"d":"M16 3L22 3L22 9"}),
          h('path', {"d":"M16 21L22 21L22 15"})
        ]
      );
  }
});

export default TrendUpDown;
export { TrendUpDown };
