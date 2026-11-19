import { defineComponent, h } from 'vue';

const ArrowRepeatTall = defineComponent({
  name: 'ArrowRepeatTall',
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
          h('path', {"d":"M18 2L21 5L18 8"}),
          h('path', {"d":"M6 22L3 19L6 16"}),
          h('path', {"d":"M21 5L7 5C4.789 5 3 6.789 3 9L3 13"}),
          h('path', {"d":"M3 19L17 19C19.211 19 21 17.211 21 15L21 11"})
        ]
      );
  }
});

export default ArrowRepeatTall;
export { ArrowRepeatTall };
