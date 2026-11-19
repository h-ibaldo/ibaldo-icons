import { defineComponent, h } from 'vue';

const BookmarkOneCurl = defineComponent({
  name: 'BookmarkOneCurl',
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
          h('path', {"d":"M21,2H7c-1.656854249493335,0-3,1.343145750510303-3,3v17l7-4.000000004851245,7,4.000000004851245V4.999997000000803c0-1.656852592641371,1.343144416809082-2.999997000000803,2.999996999998984-2.999997000000803h.000003000001016Z"}),
          h('polyline', {"points":"10 7 11 7 11 14"})
        ]
      );
  }
});

export default BookmarkOneCurl;
export { BookmarkOneCurl };
