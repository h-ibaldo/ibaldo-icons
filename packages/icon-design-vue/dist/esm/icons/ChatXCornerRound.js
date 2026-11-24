import { defineComponent, h } from 'vue';

const ChatXCornerRound = defineComponent({
  name: 'ChatXCornerRound',
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
          h('path', {"d":"M18 7L22 3"}),
          h('path', {"d":"M22 7L18 3"}),
          h('path', {"d":"M14 2.199C13.355 2.07 12.684 2 12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 11.664 21.98 11.328 21.949 11"})
        ]
      );
  }
});

export default ChatXCornerRound;
export { ChatXCornerRound };
