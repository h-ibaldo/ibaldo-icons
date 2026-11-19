import { defineComponent, h } from 'vue';

const SearchDotsB = defineComponent({
  name: 'SearchDotsB',
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
          h('circle', {"cx":"9.999999993273377","cy":"9.998779299956368","r":"8"}),
          h('line', {"x1":"15.656860344834058","y1":"15.655639651518868","x2":"21.999999993273377","y2":"21.998779299956368"}),
          h('line', {"x1":"5.999999993283382","y1":"10.008779299956586","x2":"5.999999993283382","y2":"9.998779299956368"}),
          h('line', {"x1":"9.999999993283382","y1":"10.008779299956586","x2":"9.999999993283382","y2":"9.998779299956368"}),
          h('line', {"x1":"13.999999993283382","y1":"10.008779299956586","x2":"13.999999993283382","y2":"9.998779299956368"})
        ]
      );
  }
});

export default SearchDotsB;
export { SearchDotsB };
