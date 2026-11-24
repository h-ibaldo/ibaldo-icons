import { defineComponent, h } from 'vue';

const ChatQuoteWide = defineComponent({
  name: 'ChatQuoteWide',
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
          h('path', {"d":"M8 12.816C9.16 12.402 10 11.305 10 10"}),
          h('path', {"d":"M10 10L8 10L8 9L10 9Z"}),
          h('path', {"d":"M14 12.816C15.16 12.402 16 11.305 16 10"}),
          h('path', {"d":"M16 10L14 10L14 9L16 9Z"}),
          h('path', {"d":"M14.5 3L9.5 3C5.359 3 2 6.355 2 10.5C2 13.766 4.09 16.531 7 17.563L7 22L11.668 18L14.5 18C18.645 18 22 14.645 22 10.5C22 6.355 18.645 3 14.5 3Z"})
        ]
      );
  }
});

export default ChatQuoteWide;
export { ChatQuoteWide };
