import { defineComponent, h } from 'vue';

const SearchPlusC = defineComponent({
  name: 'SearchPlusC',
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
          h('circle', {"cx":"8.999999993642632","cy":"8.998779299956368","r":"7.000000000000001"}),
          h('line', {"x1":"21.999999993642632","y1":"21.998779299956368","x2":"13.999999993642632","y2":"13.998779299956368"}),
          h('line', {"x1":"8.999999993642632","y1":"5.998779299956368","x2":"8.999999993642632","y2":"11.998779299956368"}),
          h('line', {"x1":"11.999999993642632","y1":"8.998779299956368","x2":"5.999999993642632","y2":"8.998779299956368"})
        ]
      );
  }
});

export default SearchPlusC;
export { SearchPlusC };
