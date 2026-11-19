import { defineComponent, h } from 'vue';

const ArrowDownNarrow = defineComponent({
  name: 'ArrowDownNarrow',
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
          h('path', {"d":"M17 15L12 20L7 15"}),
          h('path', {"d":"M12 20L12 4"})
        ]
      );
  }
});

export default ArrowDownNarrow;
export { ArrowDownNarrow };
