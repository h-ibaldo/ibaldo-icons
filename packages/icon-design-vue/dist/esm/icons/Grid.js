import { defineComponent, h } from 'vue';

const Grid = defineComponent({
  name: 'Grid',
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
          h('rect', {"x":"2.000000005000402","y":"2.000000003888999","width":"8","height":"8","rx":"1","ry":"1"}),
          h('rect', {"x":"14.000000005000402","y":"2.000000003888999","width":"8","height":"8","rx":"1","ry":"1"}),
          h('rect', {"x":"2.000000005000402","y":"14.000000003886271","width":"8","height":"8","rx":"1","ry":"1"}),
          h('rect', {"x":"14.000000005000402","y":"14.000000003886271","width":"8","height":"8","rx":"1","ry":"1"})
        ]
      );
  }
});

export default Grid;
export { Grid };
