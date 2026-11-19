import { defineComponent, h } from 'vue';

const WindowSearchBare = defineComponent({
  name: 'WindowSearchBare',
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
          h('path', {"d":"M11.00000000018008,22.000000000456566l-6.999999999990905.000000000002728c-1.104569499659192,0-2-.89543050033717-2-2V4.000000000456566c0-1.104569499661011.895430500340808-1.999999999997272,2-1.999999999997272l16-.000000000002728c1.104569499671925,0,2,.895430500338989,2,2v6.999999999991815"}),
          h('circle', {"cx":"16.00000000018008","cy":"16.000000000449745","r":"4.000000000000682"}),
          h('line', {"x1":"22.00000000018008","y1":"22.000000000448381","x2":"18.786376953319632","y2":"18.8631591801377"}),
          h('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381"}),
          h('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381"}),
          h('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381"})
        ]
      );
  }
});

export default WindowSearchBare;
export { WindowSearchBare };
