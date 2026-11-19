import { defineComponent, h } from 'vue';

const ChatPlusCircleTall = defineComponent({
  name: 'ChatPlusCircleTall',
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
          h('path', {"d":"M11 2.066C10.672 2.027 10.34 2 10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18L10 22C13.469 20.613 15.805 17.988 17.016 15"}),
          h('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z"}),
          h('path', {"d":"M17 5L17 9"}),
          h('path', {"d":"M19 7L15 7"})
        ]
      );
  }
});

export default ChatPlusCircleTall;
export { ChatPlusCircleTall };
