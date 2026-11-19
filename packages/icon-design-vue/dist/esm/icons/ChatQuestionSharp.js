import { defineComponent, h } from 'vue';

const ChatQuestionSharp = defineComponent({
  name: 'ChatQuestionSharp',
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
          h('path', {"d":"M10 10C10 8.895 10.895 8 12 8C13.105 8 14 8.895 14 10C14 10.641 13.746 11.254 13.293 11.707L12 13"}),
          h('path', {"d":"M12 16L12 16"})
        ]
      );
  }
});

export default ChatQuestionSharp;
export { ChatQuestionSharp };
