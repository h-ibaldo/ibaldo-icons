import { defineComponent, h } from 'vue';

const BrowserBan = defineComponent({
  name: 'BrowserBan',
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
          h('path', {"d":"M9.999999993990059,21.998779299956368H3.999999993990059c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v6"}),
          h('line', {"x1":"1.999999993990059","y1":"7.998779299956368","x2":"21.999999993990059","y2":"7.998779299956368"}),
          h('line', {"x1":"4.989999993989841","y1":"4.998779299956368","x2":"4.999999993990059","y2":"4.998779299956368"}),
          h('line', {"x1":"7.989999993989841","y1":"4.998779299956368","x2":"7.999999993990059","y2":"4.998779299956368"}),
          h('line', {"x1":"19.000000000709406","y1":"4.998779299956368","x2":"10.999999993990059","y2":"4.998779299956368"}),
          h('circle', {"cx":"16.999999993995516","cy":"16.998779299957505","r":"5.000000000001648"}),
          h('line', {"x1":"20.535533896509151","y1":"13.46324539060879","x2":"13.464466084620653","y2":"20.53431320243908"})
        ]
      );
  }
});

export default BrowserBan;
export { BrowserBan };
