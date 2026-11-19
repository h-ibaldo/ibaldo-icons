import { defineComponent, h } from 'vue';

const ChatStackSearchCornerNotch = defineComponent({
  name: 'ChatStackSearchCornerNotch',
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
          h('path', {"d":"M11 2L4 2C2.895 2 2 2.895 2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L15.758 14C16.555 14 17.316 13.684 17.879 13.121L18 13"}),
          h('path', {"d":"M22 14L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18"}),
          h('path', {"d":"M21 5.5C21 7.434 19.434 9 17.5 9C15.566 9 14 7.434 14 5.5C14 3.566 15.566 2 17.5 2C19.434 2 21 3.566 21 5.5Z"}),
          h('path', {"d":"M19.973 7.973L22 10"})
        ]
      );
  }
});

export default ChatStackSearchCornerNotch;
export { ChatStackSearchCornerNotch };
