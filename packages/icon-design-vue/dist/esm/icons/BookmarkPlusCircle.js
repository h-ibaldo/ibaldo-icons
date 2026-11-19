import { defineComponent, h } from 'vue';

const BookmarkPlusCircle = defineComponent({
  name: 'BookmarkPlusCircle',
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
          h('circle', {"cx":"16.999999973299964","cy":"10.999999999998181","r":"5"}),
          h('g', {}, [
            h('line', {"x1":"16.999999973299964","y1":"8.999999995146936","x2":"16.999999973299964","y2":"12.999999995146936"}),
            h('line', {"x1":"18.999999973299964","y1":"10.999999995057806","x2":"14.999999973299964","y2":"10.999999995237886"})
          ]),
          h('path', {"d":"M16.999999973079866,5.999999999998181l.000000000220098-3c0-.552284749830505-.447715250170404-1-1-1H3.999999973299964c-.552284749829596,0-1,.447715250169495-1,1v19l7-4,7,4-.000000000220098-6"})
        ]
      );
  }
});

export default BookmarkPlusCircle;
export { BookmarkPlusCircle };
