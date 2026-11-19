import { defineComponent, h } from 'vue';

const ArrowRightNarrow = defineComponent({
  name: 'ArrowRightNarrow',
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
          h('path', {"d":"M15 7L20 12L15 17"}),
          h('path', {"d":"M4 12L20 12"})
        ]
      );
  }
});

export default ArrowRightNarrow;
export { ArrowRightNarrow };
