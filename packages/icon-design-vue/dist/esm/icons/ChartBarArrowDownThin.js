import { defineComponent, h } from 'vue';

const ChartBarArrowDownThin = defineComponent({
  name: 'ChartBarArrowDownThin',
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
          h('polyline', {"points":"21.016630450973025 9.000000000480213 22.016630450973025 12.000000000480213 19.016630450973025 13.000000000480213"}),
          h('line', {"x1":"22.016630450973025","y1":"12.000000000480213","x2":"3.016630450973025","y2":"3.000000000480213"}),
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

export default ChartBarArrowDownThin;
export { ChartBarArrowDownThin };
