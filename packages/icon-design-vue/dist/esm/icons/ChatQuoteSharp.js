import { defineComponent, h } from 'vue';

const ChatQuoteSharp = defineComponent({
  name: 'ChatQuoteSharp',
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
          h('path', {"d":"M14 9L17 9L17 11L14 11Z"}),
          h('path', {"d":"M14 15C15.723 14.539 17 12.93 17 11"}),
          h('path', {"d":"M7 9L10 9L10 11L7 11Z"}),
          h('path', {"d":"M7 15C8.723 14.539 10 12.93 10 11"}),
          h('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"})
        ]
      );
  }
});

export default ChatQuoteSharp;
export { ChatQuoteSharp };
