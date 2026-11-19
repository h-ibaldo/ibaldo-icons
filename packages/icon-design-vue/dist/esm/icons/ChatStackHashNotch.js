import { defineComponent, h } from 'vue';

const ChatStackHashNotch = defineComponent({
  name: 'ChatStackHashNotch',
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
          h('path', {"d":"M2 4L2 13C2 14.105 2.895 15 4 15L5 15L5 19L10 15L16 15C17.105 15 18 14.105 18 13L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z"}),
          h('path', {"d":"M22 8L22 17C22 18.105 21.105 19 20 19L19 19L19 22L14 19L12 19"}),
          h('path', {"d":"M9 5L7 12"}),
          h('path', {"d":"M13 5L11 12"}),
          h('path', {"d":"M7 7L14 7"}),
          h('path', {"d":"M6 10L13 10"})
        ]
      );
  }
});

export default ChatStackHashNotch;
export { ChatStackHashNotch };
