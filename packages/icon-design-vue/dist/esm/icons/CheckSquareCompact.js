import { defineComponent, h } from 'vue';

const CheckSquareCompact = defineComponent({
  name: 'CheckSquareCompact',
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
          h('polyline', {"points":"8.949462885140747 12.000000000480213 10.949462885140747 14.000000000480213 14.949462885140747 10.000000000480213"}),
          h('rect', {"x":"3.949462885140747","y":"4.000000000480213","width":"16","height":"16","rx":"3","ry":"3"})
        ]
      );
  }
});

export default CheckSquareCompact;
export { CheckSquareCompact };
