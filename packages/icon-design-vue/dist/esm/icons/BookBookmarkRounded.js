import { defineComponent, h } from 'vue';

const BookBookmarkRounded = defineComponent({
  name: 'BookBookmarkRounded',
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
          h('polyline', {"points":"15.000000026699126 1.999999999998181 15.000000026699126 10.000000000007276 12.000000026699126 8.000000000007276 9.000000026699126 10.000000000007276 9.000000026699126 1.999999999998181"}),
          h('rect', {"x":"4.000000026699126","y":"1.999999999998181","width":"16","height":"20","rx":"2","ry":"2"}),
          h('path', {"d":"M4.000000026699126,19.999999999998181v-.000001999998858c0-1.104568388791449.895429604910532-1.999998000001142,1.999997999990228-1.999998000001142h12.000004000010449c1.10456839509061,0,1.999997999999323-.895429611208783,1.999997999999323-1.999998000001142v-.000001999998858"})
        ]
      );
  }
});

export default BookBookmarkRounded;
export { BookBookmarkRounded };
