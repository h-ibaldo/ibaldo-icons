import { defineComponent, h } from 'vue';

const ChatStackOffFlipped = defineComponent({
  name: 'ChatStackOffFlipped',
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
          h('path', {"d":"M22 12L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18"}),
          h('path', {"d":"M20 3L4 21"}),
          h('path', {"d":"M11.668 6L10 6L5 2L5 6L4 6C2.895 6 2 6.895 2 8L2 12C2 13.105 2.895 14 4 14L4.555 14"}),
          h('path', {"d":"M10.223 14L16 14C17.105 14 18 13.105 18 12L18 8C18 7.285 17.621 6.664 17.059 6.309"})
        ]
      );
  }
});

export default ChatStackOffFlipped;
export { ChatStackOffFlipped };
