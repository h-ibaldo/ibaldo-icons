import { defineComponent, h } from 'vue';

const ChatReplyAllWide = defineComponent({
  name: 'ChatReplyAllWide',
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
          h('path', {"d":"M15 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10C22 6.133 18.867 3 15 3Z"}),
          h('path', {"d":"M13.023 11L11.023 9L13.023 7"}),
          h('path', {"d":"M9.023 11L7.023 9L9.023 7"}),
          h('path', {"d":"M11.023 9L14.023 9C15.68 9 17.023 10.344 17.023 12"})
        ]
      );
  }
});

export default ChatReplyAllWide;
export { ChatReplyAllWide };
