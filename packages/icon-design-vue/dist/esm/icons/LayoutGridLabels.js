import { defineComponent, h } from 'vue';

const LayoutGridLabels = defineComponent({
  name: 'LayoutGridLabels',
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
          h('rect', {"x":"1.999999994000973","y":"1.998779299956368","width":"7","height":"5","rx":"1","ry":"1"}),
          h('line', {"x1":"1.999999994000973","y1":"9.998779299956368","x2":"8.999999994000973","y2":"9.998779299956368"}),
          h('rect', {"x":"14.999999994000973","y":"1.998779299956368","width":"7","height":"5","rx":"1","ry":"1"}),
          h('line', {"x1":"14.999999994000973","y1":"9.998779299956368","x2":"21.999999994000973","y2":"9.998779299956368"}),
          h('rect', {"x":"1.999999994000973","y":"13.99877929995273","width":"7","height":"5","rx":"1","ry":"1"}),
          h('line', {"x1":"1.999999994000973","y1":"21.998779299956368","x2":"8.999999994000973","y2":"21.998779299956368"}),
          h('rect', {"x":"14.999999994000973","y":"13.99877929995273","width":"7","height":"5","rx":"1","ry":"1"}),
          h('line', {"x1":"14.999999994000973","y1":"21.998779299956368","x2":"21.999999994000973","y2":"21.998779299956368"})
        ]
      );
  }
});

export default LayoutGridLabels;
export { LayoutGridLabels };
