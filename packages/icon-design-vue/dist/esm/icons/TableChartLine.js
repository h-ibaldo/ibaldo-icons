import { defineComponent, h } from 'vue';

const TableChartLine = defineComponent({
  name: 'TableChartLine',
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
          h('rect', {"x":"1.949462885142566","y":"2.000000000480213","width":"20","height":"20"}),
          h('line', {"x1":"1.949462885142566","y1":"6.000000000480213","x2":"21.949462885142566","y2":"6.000000000480213"}),
          h('line', {"x1":"5.949462885142566","y1":"2.000000000480213","x2":"5.949462885142566","y2":"22.000000000480213"}),
          h('polyline', {"points":"9.949462885142566 17.000000000480213 12.949462885142566 13.000000000480213 14.949462885142566 15.000000000480213 17.949462885142566 11.000000000480213"})
        ]
      );
  }
});

export default TableChartLine;
export { TableChartLine };
