import { defineComponent, h } from 'vue';

const ChatDotRound = defineComponent({
  name: 'ChatDotRound',
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
          h('path', {"d":"M16 5C16 6.656 17.344 8 19 8C20.656 8 22 6.656 22 5C22 3.344 20.656 2 19 2C17.344 2 16 3.344 16 5Z"}),
          h('path', {"d":"M13 2.051C12.672 2.016 12.34 2 12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.793L2 22L12 22C17.523 22 22 17.523 22 12C22 11.664 21.98 11.328 21.949 11"})
        ]
      );
  }
});

export default ChatDotRound;
export { ChatDotRound };
