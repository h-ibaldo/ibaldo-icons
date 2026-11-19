import { defineComponent, h } from 'vue';

const BookmarkXRound = defineComponent({
  name: 'BookmarkXRound',
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
          h('path', {"d":"M16.000000026696398,1.999999999998181h-8c-1.656854249494245,0-3,1.343145750509393-3,3v17l7-4,7,4V4.999999999998181c0-1.656854249490607-1.343145750507574-3-3-3Z"}),
          h('line', {"x1":"10.000000015916157","y1":"12.000000031348463","x2":"14.000000053394615","y2":"7.999999999998181"}),
          h('line', {"x1":"10.000000016096237","y1":"7.999999999818101","x2":"14.000000053216354","y2":"12.000000031528543"})
        ]
      );
  }
});

export default BookmarkXRound;
export { BookmarkXRound };
