import { defineComponent, h } from 'vue';

const TextAppCircle = defineComponent({
  name: 'TextAppCircle',
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
          h('path', {"d":"M2 15L4 9L5.125 9L7 15"}),
          h('path', {"d":"M10 13L12 13C13.105 13 14 12.105 14 11C14 9.895 13.105 9 12 9L10 9"}),
          h('path', {"d":"M3 14L6 14"}),
          h('path', {"d":"M10 9L10 15"}),
          h('path', {"d":"M17 13L19 13C20.105 13 21 12.105 21 11C21 9.895 20.105 9 19 9L17 9"}),
          h('path', {"d":"M17 9L17 15"}),
          h('path', {"d":"M19.137 5C17.32 3.148 14.797 2 12 2C9.203 2 6.68 3.148 4.863 5"}),
          h('path', {"d":"M4.863 19C6.68 20.852 9.203 22 12 22C14.797 22 17.32 20.852 19.137 19"})
        ]
      );
  }
});

export default TextAppCircle;
export { TextAppCircle };
