import { defineComponent, h } from 'vue';

const ArrowUpDouble = defineComponent({
  name: 'ArrowUpDouble',
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
          h('path', {"d":"M4 10L12 2L20 10"}),
          h('path', {"d":"M4 16L12 8L20 16"}),
          h('path', {"d":"M12 22L12 8"})
        ]
      );
  }
});

export default ArrowUpDouble;
export { ArrowUpDouble };
