import { defineComponent, h } from 'vue';

const BrowserSearchPlain = defineComponent({
  name: 'BrowserSearchPlain',
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
          h('path', {"d":"M10.999999976269464,21.998779299956368H3.999999976220352c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v7"}),
          h('circle', {"cx":"15.999999976220352","cy":"15.998779300000933","r":"4.000000000000455"}),
          h('line', {"x1":"18.82843015213075","y1":"18.827209475653945","x2":"21.999999976489562","y2":"21.998779299730813"}),
          h('line', {"x1":"6.00999997622057","y1":"5.998779299956368","x2":"5.999999976220352","y2":"5.998779299956368"}),
          h('line', {"x1":"9.00999997622057","y1":"5.998779299956368","x2":"8.999999976220352","y2":"5.998779299956368"}),
          h('line', {"x1":"17.999999976220352","y1":"5.998779299956368","x2":"11.999999976220352","y2":"5.998779299956368"})
        ]
      );
  }
});

export default BrowserSearchPlain;
export { BrowserSearchPlain };
