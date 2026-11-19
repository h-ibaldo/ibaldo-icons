import { defineComponent, h } from 'vue';

const ChatStackEditNotch = defineComponent({
  name: 'ChatStackEditNotch',
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
          h('path', {"d":"M2 10L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L10 2"}),
          h('path', {"d":"M22 8L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18"}),
          h('path', {"d":"M2.707 4.293L4.293 2.707C4.684 2.316 5.316 2.316 5.707 2.707L10 7L10 10L7 10L2.707 5.707C2.316 5.316 2.316 4.684 2.707 4.293Z"})
        ]
      );
  }
});

export default ChatStackEditNotch;
export { ChatStackEditNotch };
