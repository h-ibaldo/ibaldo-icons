import { defineComponent, h } from 'vue';

const ArrowUturnDownFlippedLong = defineComponent({
  name: 'ArrowUturnDownFlippedLong',
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
          h('path', {"d":"M8 21L8 9C8 5.688 10.688 3 14 3C17.313 3 20 5.688 20 9L20 20"})
        ]
      );
  }
});

export default ArrowUturnDownFlippedLong;
export { ArrowUturnDownFlippedLong };
