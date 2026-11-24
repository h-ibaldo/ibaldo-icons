import { defineComponent, h } from 'vue';

const MailStackSearchFolds = defineComponent({
  name: 'MailStackSearchFolds',
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
          h('circle', {"cx":"17.999999976489562","cy":"15.998779299956368","r":"4"}),
          h('line', {"x1":"15.171569800710131","y1":"18.827209475737618","x2":"11.999999976489562","y2":"21.998779299956368"}),
          h('path', {"d":"M10.999999976489562,12.998779299956368h-4c-.552284749830505,0-1-.447715250167676-1-1V2.998779299956368c0-.552284749828686.447715250169495-1,1-1h14c.552284749830505,0,1,.447715250171314,1,1v7"}),
          h('path', {"d":"M1.999999976489562,4.998779299956368v11c0,.552284749832324.447715250169495,1,1,1h7"}),
          h('path', {"d":"M6.38482663664945,2.229736331206368l6.950809501011463,6.178497334236454c.378886021968356.336787575088238.949841655679847.336787575088238,1.328727677659117,0l6.950809501009644-6.178497334236454"}),
          h('line', {"x1":"12.312438941340588","y1":"7.498779299956368","x2":"6.38482663664945","y2":"12.767822268706368"})
        ]
      );
  }
});

export default MailStackSearchFolds;
export { MailStackSearchFolds };
