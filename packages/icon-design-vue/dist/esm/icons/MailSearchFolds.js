import { defineComponent, h } from 'vue';

const MailSearchFolds = defineComponent({
  name: 'MailSearchFolds',
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
          h('path', {"d":"M9.999999976489562,15.998779299956368H2.999999976489562c-.552284749830505,0-1-.447715250167676-1-1V2.998779299956368c0-.552284749828686.447715250169495-1,1-1h18c.552284749830505,0,1,.447715250171314,1,1v6"}),
          h('polyline', {"points":"2.367126441329674 2.241638186675118 11.999999976489562 10.998779299956368 21.63287351164945 2.241638186675118"}),
          h('line', {"x1":"9.799987769460131","y1":"8.998779299956368","x2":"2.367126441329674","y2":"15.755920413237618"}),
          h('g', {}, [
            h('circle', {"cx":"17.999999976489562","cy":"15.998779299956368","r":"4"}),
            h('line', {"x1":"15.171569800710131","y1":"18.827209475737618","x2":"11.999999976489562","y2":"21.998779299956368"})
          ])
        ]
      );
  }
});

export default MailSearchFolds;
export { MailSearchFolds };
