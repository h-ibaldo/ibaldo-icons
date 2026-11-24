import { defineComponent, h } from 'vue';

const ChartBarDownPeakSquare = defineComponent({
  name: 'ChartBarDownPeakSquare',
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
          h('rect', {"x":"1.974731440099276","y":"2.000000004336471","width":"20","height":"20","rx":"5","ry":"5"}),
          h('rect', {"x":"5.974731440099276","y":"6.000000003885361","width":"4","height":"6"}),
          h('rect', {"x":"9.974731440099276","y":"6.000000003885361","width":"4","height":"9"}),
          h('rect', {"x":"13.974731440099276","y":"6.000000003885361","width":"4","height":"5"})
        ]
      );
  }
});

export default ChartBarDownPeakSquare;
export { ChartBarDownPeakSquare };
