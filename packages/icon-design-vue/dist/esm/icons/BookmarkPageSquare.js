import { defineComponent, h } from 'vue';

const BookmarkPageSquare = defineComponent({
  name: 'BookmarkPageSquare',
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
          h('polyline', {"points":"12.000000026695488 1.999999999998181 12.000000026695488 9.999999999998181 9.000000026695488 7.999999999998181 6.000000026695488 9.999999999998181 6.000000026695488 1.999999999998181"}),
          h('rect', {"x":"2.000000026695488","y":"1.999999999998181","width":"19.984068797650252","height":"20","rx":"2","ry":"2"}),
          h('line', {"x1":"6.000000026695488","y1":"13.999999999998181","x2":"18.000000026695488","y2":"13.999999999998181"}),
          h('line', {"x1":"15.984068824345741","y1":"9.999999999998181","x2":"18.000000026695488","y2":"9.999999999998181"}),
          h('line', {"x1":"15.984068824345741","y1":"5.999999999998181","x2":"18.000000026695488","y2":"5.999999999998181"}),
          h('line', {"x1":"6.000000026695488","y1":"17.999999999998181","x2":"18.000000026695488","y2":"17.999999999998181"})
        ]
      );
  }
});

export default BookmarkPageSquare;
export { BookmarkPageSquare };
