import { defineComponent, h } from 'vue';

const BookBookmarkSpine = defineComponent({
  name: 'BookBookmarkSpine',
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
          h('polyline', {"points":"17.000000026699126 1.999999999998181 17.000000026699126 10.999999999998181 14.000000026699126 8.999999999998181 11.000000026699126 10.999999999998181 11.000000026699126 1.999999999998181"}),
          h('rect', {"x":"6.000000026699126","y":"1.999999999998181","width":"15.999999999990905","height":"20"}),
          h('line', {"x1":"2.000000026699126","y1":"1.999999999998181","x2":"2.000000026699126","y2":"21.999999999998181"})
        ]
      );
  }
});

export default BookBookmarkSpine;
export { BookBookmarkSpine };
