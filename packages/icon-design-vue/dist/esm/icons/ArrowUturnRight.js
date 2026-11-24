import { defineComponent, h } from 'vue';

const ArrowUturnRight = defineComponent({
  name: 'ArrowUturnRight',
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
          h('path', {"d":"M17 12L21 8L17 4"}),
          h('path', {"d":"M21 8L9 8C5.688 8 3 10.688 3 14C3 17.313 5.688 20 9 20L12 20"})
        ]
      );
  }
});

export default ArrowUturnRight;
export { ArrowUturnRight };
