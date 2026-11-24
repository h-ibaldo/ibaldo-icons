import { defineComponent, h } from 'vue';

const SearchX = defineComponent({
  name: 'SearchX',
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
          h('circle', {"cx":"11.000000014042598","cy":"10.998779305395146","r":"9"}),
          h('line', {"x1":"17.363952650763167","y1":"17.362731942113896","x2":"22.000000014042598","y2":"21.998779305395146"}),
          h('line', {"x1":"14.000000014042598","y1":"7.998779305395146","x2":"8.000000014042598","y2":"13.998779305395146"}),
          h('line', {"x1":"8.00000001391345","y1":"7.998779305529752","x2":"14.000000014173565","y2":"13.998779305260541"})
        ]
      );
  }
});

export default SearchX;
export { SearchX };
