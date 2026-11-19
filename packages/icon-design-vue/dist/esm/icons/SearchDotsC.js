import { defineComponent, h } from 'vue';

const SearchDotsC = defineComponent({
  name: 'SearchDotsC',
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
          h('circle', {"cx":"8.999999993273377","cy":"8.998779299956368","r":"7.000000000000001"}),
          h('line', {"x1":"21.999999993273377","y1":"21.998779299956368","x2":"13.999999993273377","y2":"13.998779299956368"}),
          h('line', {"x1":"5.999999993283382","y1":"9.008779299956586","x2":"5.999999993283382","y2":"8.998779299956368"}),
          h('line', {"x1":"8.999999993283382","y1":"9.008779299956586","x2":"8.999999993283382","y2":"8.998779299956368"}),
          h('line', {"x1":"11.999999993283382","y1":"9.008779299956586","x2":"11.999999993283382","y2":"8.998779299956368"})
        ]
      );
  }
});

export default SearchDotsC;
export { SearchDotsC };
