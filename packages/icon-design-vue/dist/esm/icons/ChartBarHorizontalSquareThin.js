import { defineComponent, h } from 'vue';

const ChartBarHorizontalSquareThin = defineComponent({
  name: 'ChartBarHorizontalSquareThin',
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
          h('rect', {"x":"1.949462885142566","y":"2.000000000480213","width":"20","height":"20"}),
          h('line', {"x1":"1.949462885144385","y1":"7.000000000480213","x2":"6.949462885142566","y2":"7.000000000480213"}),
          h('line', {"x1":"1.949462885144385","y1":"12.000000000480213","x2":"15.949462885142566","y2":"12.000000000480213"}),
          h('line', {"x1":"1.949462885144385","y1":"17.000000000480213","x2":"12.949462885142566","y2":"17.000000000480213"})
        ]
      );
  }
});

export default ChartBarHorizontalSquareThin;
export { ChartBarHorizontalSquareThin };
