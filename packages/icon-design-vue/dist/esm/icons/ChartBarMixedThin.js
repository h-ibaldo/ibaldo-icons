import { defineComponent, h } from 'vue';

const ChartBarMixedThin = defineComponent({
  name: 'ChartBarMixedThin',
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
          h('line', {"x1":"4","y1":"21","x2":"4","y2":"15"}),
          h('line', {"x1":"8","y1":"21","x2":"8","y2":"9"}),
          h('line', {"x1":"12","y1":"21","x2":"12","y2":"11"}),
          h('line', {"x1":"16","y1":"21","x2":"16","y2":"3"}),
          h('line', {"x1":"20","y1":"21","x2":"20","y2":"7"})
        ]
      );
  }
});

export default ChartBarMixedThin;
export { ChartBarMixedThin };
