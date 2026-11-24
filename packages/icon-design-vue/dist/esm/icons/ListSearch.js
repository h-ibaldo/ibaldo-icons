import { defineComponent, h } from 'vue';

const ListSearch = defineComponent({
  name: 'ListSearch',
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
          h('line', {"x1":"2.00999997648978","y1":"1.998779299956368","x2":"1.999999976489562","y2":"1.998779299956368"}),
          h('line', {"x1":"2.00999997648978","y1":"5.998779299956368","x2":"1.999999976489562","y2":"5.998779299956368"}),
          h('line', {"x1":"2.00999997648978","y1":"9.998779299956368","x2":"1.999999976489562","y2":"9.998779299956368"}),
          h('line', {"x1":"5.999999976489562","y1":"1.998779299956368","x2":"14.999999976489562","y2":"1.998779299956368"}),
          h('line', {"x1":"5.999999976489562","y1":"5.998779299956368","x2":"14.999999976489562","y2":"5.998779299956368"}),
          h('line', {"x1":"5.999999976489562","y1":"9.998779299956368","x2":"8.999999976489562","y2":"9.998779299956368"}),
          h('circle', {"cx":"16.499999976489562","cy":"14.498779299956368","r":"5.5"}),
          h('line', {"x1":"12.61090085539945","y1":"18.387878421050118","x2":"8.999999976489562","y2":"21.998779299956368"})
        ]
      );
  }
});

export default ListSearch;
export { ListSearch };
