import { defineComponent, h } from 'vue';

const ChatStackOffNotch = defineComponent({
  name: 'ChatStackOffNotch',
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
          h('path', {"d":"M19 8L19 7C19 5.895 18.105 5 17 5L16 5"}),
          h('path', {"d":"M19 13L19 16C19 17.105 18.105 18 17 18L16 18L16 22L11 18"}),
          h('path', {"d":"M22 16L8 2"}),
          h('path', {"d":"M11 5L4 5C2.895 5 2 5.895 2 7L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L13 14C14.105 14 15 13.105 15 12L15 9Z"})
        ]
      );
  }
});

export default ChatStackOffNotch;
export { ChatStackOffNotch };
