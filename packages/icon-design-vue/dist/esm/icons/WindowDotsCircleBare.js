import { defineComponent, h } from 'vue';

const WindowDotsCircleBare = defineComponent({
  name: 'WindowDotsCircleBare',
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
          h('path', {"d":"M9.00000000018008,22.000000000456566l-5,.000000000002728c-1.104569499659192,0-2-.89543050033717-2-2V4.000000000456566c0-1.104569499661011.895430500340808-1.999999999997272,2-1.999999999997272l16-.000000000002728c1.104569499659192,0,2,.895430500338989,2,2v4.999999999991815"}),
          h('circle', {"cx":"16.50000000018008","cy":"16.500000000456566","r":"5.5"}),
          h('line', {"x1":"14.75000000018008","y1":"16.510000000370383","x2":"14.75000000018008","y2":"16.500000000548425"}),
          h('line', {"x1":"18.25000000018008","y1":"16.500000000370164","x2":"18.25000000018008","y2":"16.510000000548644"}),
          h('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381"}),
          h('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381"}),
          h('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381"})
        ]
      );
  }
});

export default WindowDotsCircleBare;
export { WindowDotsCircleBare };
