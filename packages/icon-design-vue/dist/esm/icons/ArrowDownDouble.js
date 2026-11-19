import { defineComponent, h } from 'vue';

const ArrowDownDouble = defineComponent({
  name: 'ArrowDownDouble',
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
          h('path', {"d":"M20 14L12 22L4 14"}),
          h('path', {"d":"M20 8L12 16L4 8"}),
          h('path', {"d":"M12 2L12 16"})
        ]
      );
  }
});

export default ArrowDownDouble;
export { ArrowDownDouble };
