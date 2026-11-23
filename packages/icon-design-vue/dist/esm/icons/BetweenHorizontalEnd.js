import { defineComponent, h } from 'vue';

const BetweenHorizontalEnd = defineComponent({
  name: 'BetweenHorizontalEnd',
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
          h('path', {"d":"M21 16L16.758 11.758L21 7.516"}),
          h('path', {"d":"M13 22L3 22L3 14L13 14Z"}),
          h('path', {"d":"M13 10L3 10L3 2L13 2Z"})
        ]
      );
  }
});

export default BetweenHorizontalEnd;
export { BetweenHorizontalEnd };
