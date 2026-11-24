import { defineComponent, h } from 'vue';

const ArrowDiagonalIn = defineComponent({
  name: 'ArrowDiagonalIn',
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
          h('path', {"d":"M2 22L9 15"}),
          h('path', {"d":"M15 9L22 2"}),
          h('path', {"d":"M20 9L15 9L15 4"}),
          h('path', {"d":"M4 15L9 15L9 20"})
        ]
      );
  }
});

export default ArrowDiagonalIn;
export { ArrowDiagonalIn };
