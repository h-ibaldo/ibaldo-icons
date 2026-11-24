import { defineComponent, h } from 'vue';

const SearchOneToOne = defineComponent({
  name: 'SearchOneToOne',
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
          h('circle', {"cx":"10.974731417511066","cy":"10.998779298535737","r":"9"}),
          h('line', {"x1":"17.33868405422254","y1":"17.362731935254487","x2":"21.974731417511066","y2":"21.998779298535737"}),
          h('polyline', {"points":"5.974731417511066 8.998779298535737 6.974731417511066 8.998779298535737 6.974731417511066 12.998779298535737"}),
          h('polyline', {"points":"13.974731417511066 8.998779298535737 14.974731417511066 8.998779298535737 14.974731417511066 12.998779298535737"}),
          h('line', {"x1":"10.974731417511066","y1":"9.008779298535956","x2":"10.974731417511066","y2":"8.998779298535737"}),
          h('line', {"x1":"10.974731417511066","y1":"13.008779298535956","x2":"10.974731417511066","y2":"12.998779298535737"})
        ]
      );
  }
});

export default SearchOneToOne;
export { SearchOneToOne };
