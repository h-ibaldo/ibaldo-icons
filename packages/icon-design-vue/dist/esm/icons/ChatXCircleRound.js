import { defineComponent, h } from 'vue';

const ChatXCircleRound = defineComponent({
  name: 'ChatXCircleRound',
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
          h('path', {"d":"M22 7.5C22 10.539 19.535 13 16.5 13C13.465 13 11 10.539 11 7.5C11 4.461 13.465 2 16.5 2C19.535 2 22 4.461 22 7.5Z"}),
          h('path', {"d":"M14.75 9.25L18.25 5.75"}),
          h('path', {"d":"M18.25 9.25L14.75 5.75"}),
          h('path', {"d":"M9 2.465C4.945 3.738 2 7.523 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C16.477 22 20.262 19.055 21.535 15"})
        ]
      );
  }
});

export default ChatXCircleRound;
export { ChatXCircleRound };
