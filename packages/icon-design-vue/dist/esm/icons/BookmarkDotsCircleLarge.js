import { defineComponent, h } from 'vue';

const BookmarkDotsCircleLarge = defineComponent({
  name: 'BookmarkDotsCircleLarge',
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
          h('path', {"d":"M15.999999999998181,1.999999999998181H2.999999973304512c-.55230712890625,0-1,.447692871090112-1,1v19l7-4,7,4v-8"}),
          h('g', {}, [
            h('circle', {"cx":"15.99999997087798","cy":"7.999999997570285","r":"5.99999999757506"}),
            h('line', {"x1":"13.999999955856765","y1":"7.999999999998181","x2":"14.009999968451666","y2":"7.999999999998181"}),
            h('line', {"x1":"17.999999955856765","y1":"7.999999999998181","x2":"17.98999996845123","y2":"7.999999999998181"})
          ])
        ]
      );
  }
});

export default BookmarkDotsCircleLarge;
export { BookmarkDotsCircleLarge };
