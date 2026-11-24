import { defineComponent, h } from 'vue';

const SearchOneToOneB = defineComponent({
  name: 'SearchOneToOneB',
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
          h('circle', {"cx":"9.999999981002475","cy":"9.997562035418014","r":"8"}),
          h('line', {"x1":"15.656860332561337","y1":"15.654422386980514","x2":"21.999999981002475","y2":"21.997562035418014"}),
          h('line', {"x1":"6.999999980991561","y1":"7.997562035418014","x2":"6.999999980991561","y2":"11.997562035418014"}),
          h('line', {"x1":"12.999999980991561","y1":"7.997562035418014","x2":"12.999999980991561","y2":"11.997562035418014"}),
          h('line', {"x1":"9.999999980991561","y1":"8.007562035418232","x2":"9.999999980991561","y2":"7.997562035418014"}),
          h('line', {"x1":"9.999999980991561","y1":"12.007562035418232","x2":"9.999999980991561","y2":"11.997562035418014"})
        ]
      );
  }
});

export default SearchOneToOneB;
export { SearchOneToOneB };
