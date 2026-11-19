import { defineComponent, h } from 'vue';

const QuestionAnswer = defineComponent({
  name: 'QuestionAnswer',
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
          h('polyline', {"points":"1.949462885900175 2.000000000480213 9.949462885900175 2.000000000480213 9.949462885900175 16.000000000480213 4.949462885900175 16.000000000480213 1.949462885900175 19.000000000480213 1.949462885900175 16.000000000480213"}),
          h('rect', {"x":"1.949462885900175","y":"6.000000000480213","width":"4","height":"4"}),
          h('line', {"x1":"4.949462885900175","y1":"12.000000000480213","x2":"3.949462885900175","y2":"10.000000000480213"}),
          h('polyline', {"points":"21.949462885139837 5.000000000480213 13.949462885139837 5.000000000840373 13.949462885770117 19.000000000840373 18.949462885770117 19.00000000061118 21.949462885900175 22.000000000480213 21.949462885770117 19.000000000480213"}),
          h('polyline', {"points":"17.949462885900175 15.000000000480213 17.949462885900175 9.000000000480213 21.949462885900175 9.000000000480213 21.949462885900175 15.000000000480213"}),
          h('line', {"x1":"17.949462885900175","y1":"13.000000000480213","x2":"21.949462885900175","y2":"13.000000000480213"})
        ]
      );
  }
});

export default QuestionAnswer;
export { QuestionAnswer };
