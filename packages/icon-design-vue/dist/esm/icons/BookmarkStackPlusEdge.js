import { defineComponent, h } from 'vue';

const BookmarkStackPlusEdge = defineComponent({
  name: 'BookmarkStackPlusEdge',
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
          h('path', {"d":"M15.000000026699126,5.999999999998181H5.000000026699126c-.552284749828686,0-1,.447715250169495-1,1v15l6-3,6,3V6.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z"}),
          h('path', {"d":"M20.000000026699126,17.999999999998181V4.999999999998181c0-1.656854249490607-1.343145750508484-3-3-3h-9"}),
          h('line', {"x1":"7.509665274770668","y1":"12.499999999998181","x2":"12.509665274770668","y2":"12.499999999998181"}),
          h('line', {"x1":"10.009665274770668","y1":"9.999999999998181","x2":"10.009665274770668","y2":"14.999999999998181"})
        ]
      );
  }
});

export default BookmarkStackPlusEdge;
export { BookmarkStackPlusEdge };
