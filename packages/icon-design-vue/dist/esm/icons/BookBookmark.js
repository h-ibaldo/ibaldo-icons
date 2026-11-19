import { defineComponent, h } from 'vue';

const BookBookmark = defineComponent({
  name: 'BookBookmark',
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
          h('path', {"d":"M20.000000026699126,17.999999999998181H6.000000026699126c-1.104568395099705,0-1.999997999999323.895429604910532-1.999997999999323,1.999998000001142v.000003999997716c0,1.10456839509061.895429604899618,1.999998000001142,1.999997999999323,1.999998000001142h14"}),
          h('path', {"d":"M20.000000026699126,17.999999999998181V1.999999999998181H6.000000026699126c-1.104568395099705,0-1.999997999999323.895429604910532-1.999997999999323,1.999998000001142v.000003999997716"}),
          h('line', {"x1":"4.000002026699804","y1":"3.999999999998181","x2":"4.000002026699804","y2":"19.999999999998181"}),
          h('polyline', {"points":"15.000000026699126 1.999999999998181 15.000000026699126 10.999999999998181 12.000000026699126 8.999999999998181 9.000000026699126 10.999999999998181 9.000000026699126 1.999999999998181"})
        ]
      );
  }
});

export default BookBookmark;
export { BookBookmark };
