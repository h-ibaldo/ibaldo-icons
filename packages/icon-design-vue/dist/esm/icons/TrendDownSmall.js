import { defineComponent, h } from 'vue';

const TrendDownSmall = defineComponent({
  name: 'TrendDownSmall',
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
          h('path', {"d":"M2 7L10 14L14 10L22 18"}),
          h('path', {"d":"M22 14L22 18L18 18"})
        ]
      );
  }
});

export default TrendDownSmall;
export { TrendDownSmall };
