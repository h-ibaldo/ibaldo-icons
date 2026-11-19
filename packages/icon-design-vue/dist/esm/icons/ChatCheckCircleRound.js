import { defineComponent, h } from 'vue';

const ChatCheckCircleRound = defineComponent({
  name: 'ChatCheckCircleRound',
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
          h('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z"}),
          h('path', {"d":"M15 7L16.5 8.5L19 6"}),
          h('path', {"d":"M10 2.199C5.438 3.129 2 7.16 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C16.84 22 20.871 18.566 21.801 14"})
        ]
      );
  }
});

export default ChatCheckCircleRound;
export { ChatCheckCircleRound };
