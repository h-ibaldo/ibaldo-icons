import { defineComponent, h } from 'vue';

const GridRounded = defineComponent({
  name: 'GridRounded',
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
          h('rect', {"x":"2.000000005000402","y":"2.000000003888999","width":"7","height":"6.999999999997272","rx":"2","ry":"2"}),
          h('rect', {"x":"15.000000005000402","y":"2.000000003888999","width":"7","height":"6.999999999997272","rx":"2","ry":"2"}),
          h('rect', {"x":"2.000000005000402","y":"15.000000003886271","width":"7","height":"7","rx":"2","ry":"2"}),
          h('rect', {"x":"15.000000005000402","y":"15.000000003886271","width":"7","height":"7","rx":"2","ry":"2"})
        ]
      );
  }
});

export default GridRounded;
export { GridRounded };
