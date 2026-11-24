import { defineComponent, h } from 'vue';

const CoinStackDouble = defineComponent({
  name: 'CoinStackDouble',
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
          h('path', {"d":"M13 6C13 7.656 10.539 9 7.5 9C4.461 9 2 7.656 2 6C2 4.344 4.461 3 7.5 3C10.539 3 13 4.344 13 6Z"}),
          h('path', {"d":"M13 6L13 10C13 11.656 10.539 13 7.5 13C4.461 13 2 11.656 2 10L2 6"}),
          h('path', {"d":"M13 10L13 14C13 15.656 10.539 17 7.5 17C4.461 17 2 15.656 2 14L2 10"}),
          h('path', {"d":"M13 14L13 18C13 19.656 10.539 21 7.5 21C4.461 21 2 19.656 2 18L2 14"}),
          h('path', {"d":"M13 14.316C13.949 14.742 15.172 15 16.5 15C19.539 15 22 13.656 22 12L22 8"}),
          h('path', {"d":"M13 18.316C13.949 18.742 15.172 19 16.5 19C19.539 19 22 17.656 22 16L22 12"}),
          h('path', {"d":"M13 10.316C13.949 10.742 15.172 11 16.5 11C19.539 11 22 9.656 22 8C22 6.344 19.539 5 16.5 5C15.172 5 13.949 5.258 13 5.684"})
        ]
      );
  }
});

export default CoinStackDouble;
export { CoinStackDouble };
