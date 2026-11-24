import { defineComponent, h } from 'vue';

const ArrowLeftDouble = defineComponent({
  name: 'ArrowLeftDouble',
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
          h('path', {"d":"M10 20L2 12L10 4"}),
          h('path', {"d":"M16 20L8 12L16 4"}),
          h('path', {"d":"M22 12L8 12"})
        ]
      );
  }
});

export default ArrowLeftDouble;
export { ArrowLeftDouble };
