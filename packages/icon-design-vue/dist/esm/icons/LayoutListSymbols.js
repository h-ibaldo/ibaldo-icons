import { defineComponent, h } from 'vue';

const LayoutListSymbols = defineComponent({
  name: 'LayoutListSymbols',
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
          h('line', {"x1":"9.999999994000973","y1":"3.998779299956368","x2":"21.999999994000973","y2":"3.998779299956368"}),
          h('line', {"x1":"9.999999994000973","y1":"11.998779299956368","x2":"21.999999994000973","y2":"11.998779299956368"}),
          h('line', {"x1":"9.999999994000973","y1":"19.998779299956368","x2":"21.999999994000973","y2":"19.998779299956368"}),
          h('polygon', {"points":"3.999999994000973 1.998779299956368 4.472135948999494 3.526643344957847 5.999999994000973 3.526643344957847 4.763932016499894 4.470915254954889 5.236067971500233 5.998779299956368 3.999999994000973 5.054507389959326 2.763932016499894 5.998779299956368 3.236067971500233 4.470915254954889 1.999999994000973 3.526643344957847 3.527864039000633 3.526643344957847 3.999999994000973 1.998779299956368"}),
          h('circle', {"cx":"3.999999994000973","cy":"11.998779299956368","r":"2"}),
          h('line', {"x1":"1.999999994019163","y1":"17.998779299956368","x2":"5.999999993910023","y2":"21.998779299956368"}),
          h('line', {"x1":"1.999999993939127","y1":"21.998779299865419","x2":"5.999999994000973","y2":"17.998779300047318"})
        ]
      );
  }
});

export default LayoutListSymbols;
export { LayoutListSymbols };
