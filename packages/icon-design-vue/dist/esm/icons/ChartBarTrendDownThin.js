import { defineComponent, h } from 'vue';

const ChartBarTrendDownThin = defineComponent({
  name: 'ChartBarTrendDownThin',
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
          h('polyline', {"points":"22.016630450973025 8.000000000480213 22.016630450973025 12.000000000480213 18.016630450973025 12.000000000480213"}),
          h('polyline', {"points":"22.016630450973025 12.000000000480213 16.016630450973025 6.000000000480213 13.516630450973025 8.500000000480213 8.516630450973025 3.500000000480213 6.016630450973025 6.000000000480213 2.016630450973025 2.000000000480213"}),
          h('line', {"x1":"2.016630450973025","y1":"9.000000000480213","x2":"2.016630450973025","y2":"22.000000000480213"}),
          h('line', {"x1":"6.016630450973025","y1":"11.000000000480213","x2":"6.016630450973025","y2":"22.000000000480213"}),
          h('line', {"x1":"10.016630450973025","y1":"13.000000000480213","x2":"10.016630450973025","y2":"22.000000000480213"}),
          h('line', {"x1":"14.016630450973025","y1":"15.000000000480213","x2":"14.016630450973025","y2":"22.000000000480213"}),
          h('line', {"x1":"18.016630450973025","y1":"17.000000000480213","x2":"18.016630450973025","y2":"22.000000000480213"}),
          h('line', {"x1":"22.016630450973025","y1":"19.000000000480213","x2":"22.016630450973025","y2":"22.000000000480213"})
        ]
      );
  }
});

export default ChartBarTrendDownThin;
export { ChartBarTrendDownThin };
