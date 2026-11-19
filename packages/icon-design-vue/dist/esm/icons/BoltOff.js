import { defineComponent, h } from 'vue';

const BoltOff = defineComponent({
  name: 'BoltOff',
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
          h('line', {"x1":"2.999999976489562","y1":"2.998779299956368","x2":"20.999999976489562","y2":"20.998779299956368"}),
          h('g', {}, [
            h('polyline', {"points":"15.400024390559338 15.398803714018868 18.999999976489562 9.998779299956368 12.999999976489562 9.998779299956368 12.999999976489562 1.998779299956368 8.599975562428881 8.598754885893868"}),
            h('polyline', {"points":"10.999999976489562 15.998779299956368 10.999999976489562 21.998840335112618 13.400024390559338 18.398803714018868"}),
            h('polyline', {"points":"6.599975562428881 11.598754885893868 4.999999976489562 13.998779299956368 8.999999976489562 13.998779299956368"})
          ])
        ]
      );
  }
});

export default BoltOff;
export { BoltOff };
