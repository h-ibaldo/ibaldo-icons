import { defineComponent, h } from 'vue';

const BookBookmarkUnderline = defineComponent({
  name: 'BookBookmarkUnderline',
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
          h('polyline', {"points":"15.000000026695488 1.999999999998181 15.000000026695488 10.999999999998181 12.000000026695488 8.999999999998181 9.000000026695488 10.999999999998181 9.000000026695488 1.999999999998181"}),
          h('rect', {"x":"4.000000026695488","y":"1.999999999998181","width":"15.999999999998181","height":"16"}),
          h('line', {"x1":"4.000000026695488","y1":"21.999999999998181","x2":"20.000000026695488","y2":"21.999999999998181"})
        ]
      );
  }
});

export default BookBookmarkUnderline;
export { BookBookmarkUnderline };
