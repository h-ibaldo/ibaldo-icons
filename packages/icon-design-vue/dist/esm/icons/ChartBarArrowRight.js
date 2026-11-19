import { defineComponent, h } from 'vue';

const ChartBarArrowRight = defineComponent({
  name: 'ChartBarArrowRight',
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
          h('polyline', {"points":"19.016630450973025 2.000000000480213 22.016630450973025 5.000000000480213 19.016630450973025 8.000000000480213"}),
          h('line', {"x1":"22.016630450973025","y1":"5.000000000480213","x2":"2.016630450973025","y2":"5.000000000480213"}),
          h('rect', {"x":"2.016630450681987","y":"12.000000000480213","width":"4.000000000289219","height":"10"}),
          h('rect', {"x":"10.016630450683806","y":"12.000000000480213","width":"4.000000000289219","height":"10"}),
          h('rect', {"x":"18.016630450973025","y":"12.000000000480213","width":"4.000000000289219","height":"10"})
        ]
      );
  }
});

export default ChartBarArrowRight;
export { ChartBarArrowRight };
