import { defineComponent, h } from 'vue';

const ChartBarPeakJoined = defineComponent({
  name: 'ChartBarPeakJoined',
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
          h('polygon', {"points":"9.016630450567391 12.000000000480213 9.016630450567391 3.000000000480213 15.016630450567391 3.000000000480213 15.016630450567391 8.000000000480213 21.016630450567391 8.000000000480213 21.016630450567391 21.000000000480213 15.016630450567391 21.000000000480213 9.016630450567391 21.000000000480213 3.016630450567391 21.000000000480213 3.016630450567391 12.000000000480213 9.016630450567391 12.000000000480213"}),
          h('line', {"x1":"9.016630450567391","y1":"3.000000000480213","x2":"9.016630450567391","y2":"21.000000000480213"}),
          h('line', {"x1":"15.016630450567391","y1":"8.000000000480213","x2":"15.016630450567391","y2":"21.000000000480213"})
        ]
      );
  }
});

export default ChartBarPeakJoined;
export { ChartBarPeakJoined };
