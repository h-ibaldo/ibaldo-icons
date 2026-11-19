import { defineComponent, h } from 'vue';

const ArrowUturnDown = defineComponent({
  name: 'ArrowUturnDown',
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
          h('path', {"d":"M12 17L16 21L20 17"}),
          h('path', {"d":"M16 21L16 9C16 5.688 13.313 3 10 3C6.688 3 4 5.688 4 9L4 12"})
        ]
      );
  }
});

export default ArrowUturnDown;
export { ArrowUturnDown };
