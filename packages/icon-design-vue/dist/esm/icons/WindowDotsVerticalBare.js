import { defineComponent, h } from 'vue';

const WindowDotsVerticalBare = defineComponent({
  name: 'WindowDotsVerticalBare',
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
          h('path', {"d":"M22.00000000018008,16.000000000448381v4.000000000008185c0,1.104569499663739-.895430500340808,2-2,2l-16,.000000000002728c-1.104569499659192,0-2-.89543050033717-2-2V4.000000000456566c0-1.104569499661011.895430500340808-1.999999999997272,2-1.999999999997272l13-.000000000002728"}),
          h('line', {"x1":"22.00000000018008","y1":"10.010000000456785","x2":"22.00000000018008","y2":"10.000000000456566"}),
          h('line', {"x1":"22.00000000018008","y1":"6.010000000456785","x2":"22.00000000018008","y2":"6.000000000456566"}),
          h('line', {"x1":"22.00000000018008","y1":"2.010000000456785","x2":"22.00000000018008","y2":"2.000000000456566"}),
          h('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381"}),
          h('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381"}),
          h('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381"})
        ]
      );
  }
});

export default WindowDotsVerticalBare;
export { WindowDotsVerticalBare };
