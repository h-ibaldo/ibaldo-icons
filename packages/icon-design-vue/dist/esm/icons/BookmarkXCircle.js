import { defineComponent, h } from 'vue';

const BookmarkXCircle = defineComponent({
  name: 'BookmarkXCircle',
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
          h('circle', {"cx":"16.499999975730134","cy":"10.50000000242153","r":"5.499999997573241"}),
          h('line', {"x1":"17.999999978160304","y1":"8.999999999998181","x2":"14.999999978160304","y2":"11.999999999998181"}),
          h('line', {"x1":"14.99999997822033","y1":"8.99999999992724","x2":"17.999999978090273","y2":"12.000000000058208"}),
          h('path', {"d":"M15.999999973299964,5.025207519527612v-2.025207519529431c0-.552307128909888-.447692871090112-1-1-1H2.999999973299964c-.552307128899884,0-1,.447692871090112-1,1v19l7-4,7,4v-6.025207519529431"})
        ]
      );
  }
});

export default BookmarkXCircle;
export { BookmarkXCircle };
