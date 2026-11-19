import { defineComponent, h } from 'vue';

const ChartBarPeakJoinedBase = defineComponent({
  name: 'ChartBarPeakJoinedBase',
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
          h('polyline', {"points":"5.016630450163575 21.000000000010914 5.016630450163575 12.000000000010914 10.016630450163575 12.000000000010914 10.016630450163575 3.000000000010914 15.016630450163575 3.000000000010914 15.016630450163575 8.000000000010914 20.016630450163575 8.000000000010914 20.016630450163575 21.000000000010914"}),
          h('line', {"x1":"21.766630450163575","y1":"21.000000000050932","x2":"2.266630450163575","y2":"21.000000000040018"}),
          h('line', {"x1":"10.016630450163575","y1":"12.000000000010914","x2":"10.016630450163575","y2":"21.000000000010914"}),
          h('line', {"x1":"15.016630450163575","y1":"8.000000000010914","x2":"15.016630450163575","y2":"21.000000000010914"})
        ]
      );
  }
});

export default ChartBarPeakJoinedBase;
export { ChartBarPeakJoinedBase };
