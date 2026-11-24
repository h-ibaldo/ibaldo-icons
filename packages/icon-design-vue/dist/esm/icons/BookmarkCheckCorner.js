import { defineComponent, h } from 'vue';

const BookmarkCheckCorner = defineComponent({
  name: 'BookmarkCheckCorner',
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
          h('polyline', {"points":"14.000000000003638 5.999999999989086 16.000000000003638 7.999999999989086 20.000000000003638 2.999999999989086"}),
          h('path', {"d":"M11.000000000007276,2.999999999998181h-5.000000000003638c-.552284749830505,0-1,.447715250169495-1,1v18l7-4,7,4v-11.000000000009095"})
        ]
      );
  }
});

export default BookmarkCheckCorner;
export { BookmarkCheckCorner };
