import { defineComponent, h } from 'vue';

const BookmarkXCurl = defineComponent({
  name: 'BookmarkXCurl',
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
          h('path', {"d":"M21,1.999999999998181H7c-1.656854249493335,0-3,1.343145750509393-3,3v17l7-4.000000004851245,7,4.000000004851245V4.999996999998984c0-1.656852592641371,1.343144416809082-2.999997000000803,2.999996999998984-2.999997000000803h.000003000001016Z"}),
          h('line', {"x1":"9.000000000003638","y1":"12.000000026499038","x2":"13.000000037482096","y2":"7.999999995146936"}),
          h('line', {"x1":"9.000000000183718","y1":"7.999999994968675","x2":"13.000000037303835","y2":"12.000000026677299"})
        ]
      );
  }
});

export default BookmarkXCurl;
export { BookmarkXCurl };
