import { defineComponent, h } from 'vue';

const BookmarkPlusRound = defineComponent({
  name: 'BookmarkPlusRound',
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
          h('path', {"d":"M15.999999999996362,1.999999999998181H7.999999999996362c-1.656854249493335,0-3,1.343145750509393-3,3v17l7-4,7,4V4.999999999998181c0-1.656854249490607-1.343145750508484-3-3-3Z"}),
          h('line', {"x1":"8.999999999996362","y1":"9.999999999998181","x2":"14.999999999996362","y2":"9.999999999998181"}),
          h('line', {"x1":"11.999999999996362","y1":"6.999999999998181","x2":"11.999999999996362","y2":"12.999999999998181"})
        ]
      );
  }
});

export default BookmarkPlusRound;
export { BookmarkPlusRound };
