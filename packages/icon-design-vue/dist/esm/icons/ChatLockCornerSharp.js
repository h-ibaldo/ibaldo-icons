import { defineComponent, h } from 'vue';

const ChatLockCornerSharp = defineComponent({
  name: 'ChatLockCornerSharp',
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
          h('path', {"d":"M22 12L14 12L14 7L22 7Z"}),
          h('path', {"d":"M15 7L15 5C15 3.344 16.344 2 18 2C19.656 2 21 3.344 21 5L21 7"}),
          h('path', {"d":"M11 2.051C5.945 2.551 2 6.816 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C16.102 22 19.617 19.531 21.16 16"})
        ]
      );
  }
});

export default ChatLockCornerSharp;
export { ChatLockCornerSharp };
