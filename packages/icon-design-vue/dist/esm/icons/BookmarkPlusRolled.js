import { defineComponent, h } from 'vue';

const BookmarkPlusRolled = defineComponent({
  name: 'BookmarkPlusRolled',
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
          h('path', {"d":"M5.000000026699126,1.999999999998181h13c2.209138999320203,0,4,1.790861000679797,4,4v16l-7-4-7,4V4.999999999998181"}),
          h('path', {"d":"M2.000000026699126,4.999999999998181c0-1.656854249400567,1.343145750601252-3,3-3,1.656854249400567,0,3,1.343145750599433,3,3"}),
          h('polyline', {"points":"2.000000026699126 4.999999999998181 2.000000026699126 11.999999999998181 8.000000026699126 11.999999999998181"}),
          h('line', {"x1":"12.000000026699126","y1":"9.999999999998181","x2":"18.000000026699126","y2":"9.999999999998181"}),
          h('line', {"x1":"15.000000026699126","y1":"6.999999999998181","x2":"15.000000026699126","y2":"12.999999999998181"})
        ]
      );
  }
});

export default BookmarkPlusRolled;
export { BookmarkPlusRolled };
