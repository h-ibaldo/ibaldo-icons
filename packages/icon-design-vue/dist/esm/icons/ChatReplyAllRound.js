import { defineComponent, h } from 'vue';

const ChatReplyAllRound = defineComponent({
  name: 'ChatReplyAllRound',
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
          h('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"}),
          h('path', {"d":"M13.023 13.02L11.023 11.02L13.023 9.02"}),
          h('path', {"d":"M9.023 13.02L7.023 11.02L9.023 9.02"}),
          h('path', {"d":"M11.023 11.02L14.023 11.02C15.68 11.02 17.023 12.363 17.023 14.02L17.023 15.02"})
        ]
      );
  }
});

export default ChatReplyAllRound;
export { ChatReplyAllRound };
