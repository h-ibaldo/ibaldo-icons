import { defineComponent, h } from 'vue';

const CheckSquare = defineComponent({
  name: 'CheckSquare',
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
          h('polyline', {"points":"7.949462885140747 12.000000000480213 10.949462885140747 15.000000000480213 15.949462885140747 9.000000000480213"}),
          h('rect', {"x":"1.949462885140747","y":"2.000000000480213","width":"20","height":"20","rx":"3","ry":"3"})
        ]
      );
  }
});

export default CheckSquare;
export { CheckSquare };
