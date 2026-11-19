import { defineComponent, h } from 'vue';

const MailSearch = defineComponent({
  name: 'MailSearch',
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
          h('path', {"d":"M10.999999976489562,15.998779299956368H2.999999976489562c-.552284749830505,0-1-.447715250167676-1-1V2.998779299956368c0-.552284749832324.447715250169495-1,1-1h18c.552284749830505,0,1,.447715250167676,1,1v7"}),
          h('path', {"d":"M2.332641578050243,2.264892581206368l9.042663350890507,7.234130680706585c.365218650918905.292174920741672.884171444178719.292174920741672,1.249390095108538,0l9.042663350881412-7.234130680706585"})
        ]
      );
  }
});

export default MailSearch;
export { MailSearch };
