import { defineComponent, h } from 'vue';

const ArrowConvergeFour = defineComponent({
  name: 'ArrowConvergeFour',
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
          h('path', {"d":"M14 5L12 7L10 5"}),
          h('path', {"d":"M12 2L12 7"}),
          h('path', {"d":"M10 19L12 17L14 19"}),
          h('path', {"d":"M12 22L12 17"}),
          h('path', {"d":"M5 10L7 12L5 14"}),
          h('path', {"d":"M2 12L7 12"}),
          h('path', {"d":"M19 14L17 12L19 10"}),
          h('path', {"d":"M22 12L17 12"}),
          h('path', {"d":"M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z"})
        ]
      );
  }
});

export default ArrowConvergeFour;
export { ArrowConvergeFour };
