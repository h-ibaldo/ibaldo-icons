import { defineComponent, h } from 'vue';

const DiagramDecision = defineComponent({
  name: 'DiagramDecision',
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
          h('polygon', {"points":"11.949462885142566 9.000000000480213 6.949462885144385 13.000000000480213 11.949462885142566 17.000000000480213 16.949462885140747 13.000000000480213 11.949462885142566 9.000000000480213"}),
          h('rect', {"x":"1.949462885142566","y":"18.000000000480213","width":"6","height":"4"}),
          h('rect', {"x":"15.949462885142566","y":"18.000000000480213","width":"6","height":"4"}),
          h('polyline', {"points":"6.949462885142566 13.000000000480213 4.949462885142566 13.000000000480213 4.949462885142566 18.000000000480213"}),
          h('polyline', {"points":"16.949462885142566 13.000000000571163 18.949462885029789 13.000000000389264 18.949462885255343 18.000000000389264"}),
          h('line', {"x1":"11.949462885142566","y1":"6.000000000480213","x2":"11.949462885142566","y2":"9.000000000480213"}),
          h('rect', {"x":"6.949462885142566","y":"2.000000000480213","width":"10","height":"4"})
        ]
      );
  }
});

export default DiagramDecision;
export { DiagramDecision };
