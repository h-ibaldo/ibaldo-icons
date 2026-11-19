import { defineComponent, h } from 'vue';

const ChatReplyAllBroken = defineComponent({
  name: 'ChatReplyAllBroken',
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
          h('path', {"d":"M12 22L15 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18"}),
          h('path', {"d":"M13.023 11L11.023 9L13.023 7"}),
          h('path', {"d":"M9.023 11L7.023 9L9.023 7"}),
          h('path', {"d":"M11.023 9L14.023 9C15.68 9 17.023 10.344 17.023 12L17.023 13"})
        ]
      );
  }
});

export default ChatReplyAllBroken;
export { ChatReplyAllBroken };
