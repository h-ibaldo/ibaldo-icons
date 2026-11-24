import { defineComponent, h } from 'vue';

const CoinStackSearch = defineComponent({
  name: 'CoinStackSearch',
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
          h('ellipse', {"cx":"6.499999993653546","cy":"4.498779299956368","rx":"4.5","ry":"2.5"}),
          h('path', {"d":"M2.920349114743658,5.998779299956368c-.569763183590112.4188232421875-.920349121090112.93450927734375-.920349121090112,1.5,0,1.3807373046875,2.014709472648974,2.5,4.5,2.5,2.485290527340112,0,4.5-1.1192626953125,4.5-2.5,0-.56549072265625-.3505859375-1.0811767578125-.920349121101026-1.5"}),
          h('path', {"d":"M2.920349114743658,8.998779299956368c-.569763183590112.4188232421875-.920349121090112.93450927734375-.920349121090112,1.5,0,1.3807373046875,2.014709472648974,2.5,4.5,2.5,2.485290527340112,0,4.5-1.1192626953125,4.5-2.5,0-.56549072265625-.3505859375-1.0811767578125-.920349121101026-1.5"}),
          h('circle', {"cx":"17.999999993642632","cy":"14.998779299956368","r":"4"}),
          h('line', {"x1":"15.171569817863201","y1":"17.827209475737618","x2":"10.999999993642632","y2":"21.998779299956368"})
        ]
      );
  }
});

export default CoinStackSearch;
export { CoinStackSearch };
