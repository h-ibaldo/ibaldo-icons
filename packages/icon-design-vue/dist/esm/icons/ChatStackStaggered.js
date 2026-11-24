import { defineComponent, h } from 'vue';

const ChatStackStaggered = defineComponent({
  name: 'ChatStackStaggered',
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
          h('path', {"d":"M2 10L16 10C17.105 10 18 9.105 18 8L18 4C18 2.895 17.105 2 16 2L6 2C4.895 2 4 2.895 4 4L4 7Z"}),
          h('path', {"d":"M6 22L20 22C21.105 22 22 21.105 22 20L22 16C22 14.895 21.105 14 20 14L10 14C8.895 14 8 14.895 8 16L8 19Z"})
        ]
      );
  }
});

export default ChatStackStaggered;
export { ChatStackStaggered };
