import { defineComponent, h } from 'vue';

const SearchOneToOneC = defineComponent({
  name: 'SearchOneToOneC',
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
          h('circle', {"cx":"8.999999981002475","cy":"8.997562035418014","r":"7.000000000000001"}),
          h('line', {"x1":"21.999999981002475","y1":"21.997562035418014","x2":"13.999999981002475","y2":"13.997562035418014"}),
          h('line', {"x1":"5.999999980991561","y1":"6.997562035418014","x2":"5.999999980991561","y2":"10.997562035418014"}),
          h('line', {"x1":"11.999999980991561","y1":"6.997562035418014","x2":"11.999999980991561","y2":"10.997562035418014"}),
          h('line', {"x1":"8.999999980991561","y1":"7.007562035418232","x2":"8.999999980991561","y2":"6.997562035418014"}),
          h('line', {"x1":"8.999999980991561","y1":"11.007562035418232","x2":"8.999999980991561","y2":"10.997562035418014"})
        ]
      );
  }
});

export default SearchOneToOneC;
export { SearchOneToOneC };
