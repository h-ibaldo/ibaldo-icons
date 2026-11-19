import { defineComponent, h } from 'vue';

const WindowSettingsCenterBare = defineComponent({
  name: 'WindowSettingsCenterBare',
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
          h('rect', {"x":"2.00000000018008","y":"2.000000000457931","width":"20","height":"20","rx":"2.000000000000023","ry":"2.000000000000023"}),
          h('circle', {"cx":"12.00000000018008","cy":"14.000000000448381","r":"3"}),
          h('line', {"x1":"12.00000000018008","y1":"10.000000000448381","x2":"12.00000000018008","y2":"11.000000000448381"}),
          h('line', {"x1":"12.00000000018008","y1":"17.000000000448381","x2":"12.00000000018008","y2":"18.000000000448381"}),
          h('line', {"x1":"8.535898385111068","y1":"12.000000000344698","x2":"9.401923788869681","y2":"12.500000000370164"}),
          h('line', {"x1":"14.598076211490479","y1":"15.500000000526597","x2":"15.46410161527092","y2":"16.000000000552973"}),
          h('line', {"x1":"8.535898384920074","y1":"16.000000000240107","x2":"9.401923788749627","y2":"15.500000000293767"}),
          h('line', {"x1":"14.598076211639636","y1":"12.500000000604814","x2":"15.464101615440086","y2":"12.000000000655746"}),
          h('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381"}),
          h('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381"}),
          h('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381"})
        ]
      );
  }
});

export default WindowSettingsCenterBare;
export { WindowSettingsCenterBare };
