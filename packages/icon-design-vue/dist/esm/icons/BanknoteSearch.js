import { defineComponent, h } from 'vue';

const BanknoteSearch = defineComponent({
  name: 'BanknoteSearch',
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
          h('circle', {"cx":"17.999999993642632","cy":"14.998779299956368","r":"4"}),
          h('line', {"x1":"15.171569817863201","y1":"17.827209475737618","x2":"10.999999993642632","y2":"21.998779299956368"}),
          h('polyline', {"points":"10.999999993642632 12.998779299956368 1.999999993642632 12.998779299956368 1.999999993642632 1.998779299956368 18.999999993642632 1.998779299956368 18.999999993642632 7.998779299956368"}),
          h('path', {"d":"M14.999999993642632,1.998779299956368c0,2.209138999198331,1.790861000801669,4,4,4"}),
          h('path', {"d":"M5.999999993462552,12.998779300134629c.000000000190994-2.209138999198331-1.790861000439691-4.000000000160071-3.99999999963984-4.000000000356522"}),
          h('circle', {"cx":"10.499999993642632","cy":"7.498779299956368","r":"2.5"}),
          h('line', {"x1":"4.999999993642632","y1":"4.998779299956368","x2":"4.999999993642632","y2":"5.998779299956368"})
        ]
      );
  }
});

export default BanknoteSearch;
export { BanknoteSearch };
