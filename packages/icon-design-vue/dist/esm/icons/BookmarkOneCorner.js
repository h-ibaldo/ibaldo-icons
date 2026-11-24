import { defineComponent, h } from 'vue';

const BookmarkOneCorner = defineComponent({
  name: 'BookmarkOneCorner',
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
          h('path', {"d":"M13.000000026693669,2.999999999998181h-7c-.552284749828686,0-1,.447715250169495-1,1v18l7-4,7,4v-8"}),
          h('polyline', {"points":"18.000000026693669 1.999999999998181 19.000000026693669 1.999999999998181 19.000000026693669 8.999999999998181"})
        ]
      );
  }
});

export default BookmarkOneCorner;
export { BookmarkOneCorner };
