import { defineComponent, h } from 'vue';

const ChatStackHappyNotch = defineComponent({
  name: 'ChatStackHappyNotch',
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
          h('path', {"d":"M8 6L8 7"}),
          h('path', {"d":"M12 6L12 7"}),
          h('path', {"d":"M6 9.922C7.18 10.605 8.539 11 10 11C11.461 11 12.82 10.605 14 9.922"}),
          h('path', {"d":"M2 4L2 13C2 14.105 2.895 15 4 15L5 15L5 18L10 15L16 15C17.105 15 18 14.105 18 13L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z"}),
          h('path', {"d":"M22 8L22 17C22 18.105 21.105 19 20 19L19 19L19 22L14 19L12 19"})
        ]
      );
  }
});

export default ChatStackHappyNotch;
export { ChatStackHappyNotch };
