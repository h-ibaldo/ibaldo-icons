import { defineComponent, h } from 'vue';

const BookmarkMinusRound = defineComponent({
  name: 'BookmarkMinusRound',
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
          h('path', {"d":"M16.000000026694579,1.999999999998181h-7.999999999999091c-1.656854249493335,0-3,1.343145750509393-3,3v17l6.999999999999091-4,7,4V4.999999999998181c0-1.656854249490607-1.343145750505755-3-3-3Z"}),
          h('line', {"x1":"8.999999999996362","y1":"9.999999999998181","x2":"14.999999999996362","y2":"9.999999999998181"})
        ]
      );
  }
});

export default BookmarkMinusRound;
export { BookmarkMinusRound };
