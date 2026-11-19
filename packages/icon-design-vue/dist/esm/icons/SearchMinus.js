import { defineComponent, h } from 'vue';

const SearchMinus = defineComponent({
  name: 'SearchMinus',
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
          h('circle', {"cx":"10.999999993642632","cy":"10.998779299955459","r":"8.999999999998636"}),
          h('line', {"x1":"17.363952630352287","y1":"17.362731936675118","x2":"21.999999993642632","y2":"21.998779299956368"}),
          h('line', {"x1":"6.999999993642632","y1":"10.998779299956368","x2":"14.999999993642632","y2":"10.998779299956368"})
        ]
      );
  }
});

export default SearchMinus;
export { SearchMinus };
