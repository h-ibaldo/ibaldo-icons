import { defineComponent, h } from 'vue';

const ChatXCircleTall = defineComponent({
  name: 'ChatXCircleTall',
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
          h('path', {"d":"M22 7.5C22 10.535 19.535 13 16.5 13C13.465 13 11 10.535 11 7.5C11 4.465 13.465 2 16.5 2C19.535 2 22 4.465 22 7.5Z"}),
          h('path', {"d":"M18 6L15 9"}),
          h('path', {"d":"M15 6L18 9"}),
          h('path', {"d":"M10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18L10 22C13.07 20.77 15.234 18.563 16.539 16"})
        ]
      );
  }
});

export default ChatXCircleTall;
export { ChatXCircleTall };
