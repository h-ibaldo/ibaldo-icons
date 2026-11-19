import { defineComponent, h } from 'vue';

const ChatLetterTRound = defineComponent({
  name: 'ChatLetterTRound',
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
          h('path', {"d":"M10.5 8L10.5 14C10.5 15.105 11.395 16 12.5 16L13.5 16"}),
          h('path', {"d":"M13.5 11L10.5 11"}),
          h('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"})
        ]
      );
  }
});

export default ChatLetterTRound;
export { ChatLetterTRound };
