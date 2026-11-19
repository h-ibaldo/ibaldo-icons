import { defineComponent, h } from 'vue';

const ArrowDownCircleOut = defineComponent({
  name: 'ArrowDownCircleOut',
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
          h('path', {"d":"M15 18L12 21L9 18"}),
          h('path', {"d":"M12 9L12 21"}),
          h('path', {"d":"M6 20.98C3.574 19.156 2 16.27 2 13C2 7.477 6.477 3 12 3C17.523 3 22 7.477 22 13C22 16.27 20.426 19.156 18 20.98"})
        ]
      );
  }
});

export default ArrowDownCircleOut;
export { ArrowDownCircleOut };
