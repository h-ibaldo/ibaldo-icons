import { defineComponent, h } from 'vue';

const BookmarkSquare = defineComponent({
  name: 'BookmarkSquare',
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
          h('rect', {"x":"2.000000026697307","y":"2.000000000007276","width":"20","height":"20","rx":"5","ry":"5"}),
          h('path', {"d":"M15.000000026697307,6.999999999998181h-6.000000000001819c-.552284749830505,0-.999999999998181.447715250169495-.999999999998181,1v9l3.999999999996362-2.000000000009095,4.000000000003638,2.000000000009095V7.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z"})
        ]
      );
  }
});

export default BookmarkSquare;
export { BookmarkSquare };
