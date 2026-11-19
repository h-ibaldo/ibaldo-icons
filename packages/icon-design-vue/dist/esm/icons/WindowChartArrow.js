import { defineComponent, h } from 'vue';

const WindowChartArrow = defineComponent({
  name: 'WindowChartArrow',
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
          h('rect', {"x":"2.000000000184627","y":"2.000000000448381","width":"20","height":"20","rx":"2","ry":"2"}),
          h('line', {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381"}),
          h('polyline', {"points":"6.000000000184627 18.0000000004502 10.000000000184627 14.000000000446562 13.000000000184627 17.000000000448381 18.000000000184627 12.0000000004502"}),
          h('polyline', {"points":"15.000000000183718 12.000000000448381 18.000000000183718 12.000000000448381 18.000000000183718 15.000000000448381"}),
          h('line', {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381"}),
          h('line', {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381"}),
          h('line', {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381"})
        ]
      );
  }
});

export default WindowChartArrow;
export { WindowChartArrow };
