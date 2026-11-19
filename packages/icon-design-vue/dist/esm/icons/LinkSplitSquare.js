import { defineComponent, h } from 'vue';

const LinkSplitSquare = defineComponent({
  name: 'LinkSplitSquare',
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
          h('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"}),
          h('path', {"d":"M16 11L16.5 10.5C17.328 9.672 17.328 8.328 16.5 7.5C15.672 6.672 14.328 6.672 13.5 7.5L13 8"}),
          h('path', {"d":"M8 13L7.5 13.5C6.672 14.328 6.672 15.672 7.5 16.5C8.328 17.328 9.672 17.328 10.5 16.5L11 16"}),
          h('path', {"d":"M8 8L10 10"}),
          h('path', {"d":"M14 14L16.5 16.5"})
        ]
      );
  }
});

export default LinkSplitSquare;
export { LinkSplitSquare };
