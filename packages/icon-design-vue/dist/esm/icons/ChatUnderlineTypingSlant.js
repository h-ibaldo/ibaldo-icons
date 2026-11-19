import { defineComponent, h } from 'vue';

const ChatUnderlineTypingSlant = defineComponent({
  name: 'ChatUnderlineTypingSlant',
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
          h('path', {"d":"M2 5L2 11C2 12.656 3.344 14 5 14L8 14L8 18L14 14L19 14C20.656 14 22 12.656 22 11L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z"}),
          h('path', {"d":"M19 22L5 22"}),
          h('path', {"d":"M8 8L8 8"}),
          h('path', {"d":"M12 8L12 8"}),
          h('path', {"d":"M16 8L16 8"})
        ]
      );
  }
});

export default ChatUnderlineTypingSlant;
export { ChatUnderlineTypingSlant };
