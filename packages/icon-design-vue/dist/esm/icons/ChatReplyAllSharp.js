import { defineComponent, h } from 'vue';

const ChatReplyAllSharp = defineComponent({
  name: 'ChatReplyAllSharp',
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
          h('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"}),
          h('path', {"d":"M13.023 13L11.023 11L13.023 9"}),
          h('path', {"d":"M9.023 13L7.023 11L9.023 9"}),
          h('path', {"d":"M11.023 11L14.023 11C15.68 11 17.023 12.344 17.023 14L17.023 15"})
        ]
      );
  }
});

export default ChatReplyAllSharp;
export { ChatReplyAllSharp };
