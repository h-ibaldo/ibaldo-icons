import { defineComponent, h } from 'vue';

const ArrowCornerLeftDown = defineComponent({
  name: 'ArrowCornerLeftDown',
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
          h('path', {"d":"M12 17L8 21L4 17"}),
          h('path', {"d":"M8 21L8 11C8 6.582 11.582 3 16 3L20 3"})
        ]
      );
  }
});

export default ArrowCornerLeftDown;
export { ArrowCornerLeftDown };
