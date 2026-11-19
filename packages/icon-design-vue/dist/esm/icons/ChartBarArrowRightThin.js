import { defineComponent, h } from 'vue';

const ChartBarArrowRightThin = defineComponent({
  name: 'ChartBarArrowRightThin',
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
          h('line', {"x1":"22.016630451129458","y1":"12.000000000480213","x2":"22.016630450545563","y2":"22.000000001378794"}),
          h('line', {"x1":"18.016630451037599","y1":"12.000000000480213","x2":"18.016630450545563","y2":"22.000000001196895"}),
          h('line', {"x1":"14.016630450951197","y1":"12.000000000480213","x2":"14.016630450545563","y2":"22.000000001018634"}),
          h('line', {"x1":"10.016630450860248","y1":"12.000000000480213","x2":"10.016630450545563","y2":"22.000000000840373"}),
          h('line', {"x1":"6.016630450769298","y1":"12.000000000480213","x2":"6.016630450545563","y2":"22.000000000658474"}),
          h('line', {"x1":"2.016630450681077","y1":"12.000000000480213","x2":"2.016630450545563","y2":"22.000000000480213"}),
          h('polyline', {"points":"19.016630450973025 2.000000000480213 22.016630450973025 5.000000000480213 19.016630450973025 8.000000000480213"}),
          h('line', {"x1":"22.016630450973025","y1":"5.000000000480213","x2":"2.016630450973025","y2":"5.000000000480213"})
        ]
      );
  }
});

export default ChartBarArrowRightThin;
export { ChartBarArrowRightThin };
