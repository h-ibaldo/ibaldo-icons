import { defineComponent, h } from 'vue';

const CartArrowDown = defineComponent({
  name: 'CartArrowDown',
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
          h('path', {"d":"M2 2L5 3L6 15"}),
          h('path', {"d":"M10 7L13 10L16 7"}),
          h('path', {"d":"M13 2L13 10"}),
          h('path', {"d":"M19 18L5.813 18C4.773 18 4.254 16.746 4.988 16.012L6 15"}),
          h('path', {"d":"M6 15L20 14L22 5"}),
          h('path', {"d":"M4 19.945C4 18.871 4.871 18 5.945 18C7.023 18 7.895 18.871 7.895 19.945C7.895 21.023 7.023 21.895 5.945 21.895C4.871 21.895 4 21.023 4 19.945Z"}),
          h('path', {"d":"M17 19.945C17 18.871 17.871 18 18.945 18C20.023 18 20.895 18.871 20.895 19.945C20.895 21.023 20.023 21.895 18.945 21.895C17.871 21.895 17 21.023 17 19.945Z"})
        ]
      );
  }
});

export default CartArrowDown;
export { CartArrowDown };
