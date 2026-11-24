import { defineComponent, h } from 'vue';

const SearchPlus = defineComponent({
  name: 'SearchPlus',
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
          h('circle', {"cx":"11.000000014892066","cy":"10.998779301076866","r":"9"}),
          h('line', {"x1":"17.363952651612635","y1":"17.362731937795616","x2":"22.000000014892066","y2":"21.998779301076866"}),
          h('line', {"x1":"7.000000014892066","y1":"10.998779301076866","x2":"15.000000014892066","y2":"10.998779301076866"}),
          h('line', {"x1":"11.000000014892066","y1":"6.998779301076866","x2":"11.000000014892066","y2":"14.998779301076866"})
        ]
      );
  }
});

export default SearchPlus;
export { SearchPlus };
