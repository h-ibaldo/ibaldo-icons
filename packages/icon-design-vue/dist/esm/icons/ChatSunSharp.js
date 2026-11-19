import { defineComponent, h } from 'vue';

const ChatSunSharp = defineComponent({
  name: 'ChatSunSharp',
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
          h('path', {"d":"M17 12C14.789 12 13 10.211 13 8C13 5.789 14.789 4 17 4C19.211 4 21 5.789 21 8C21 10.211 19.211 12 17 12Z"}),
          h('path', {"d":"M17 2L17 4"}),
          h('path', {"d":"M17 12L17 14"}),
          h('path', {"d":"M22.195 5L20.465 6"}),
          h('path', {"d":"M13.535 10L11.805 11"}),
          h('path', {"d":"M22.195 11L20.465 10"}),
          h('path', {"d":"M13.535 6L11.805 5"}),
          h('path', {"d":"M11 2.051C5.945 2.551 2 6.816 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C16.477 22 20.266 19.055 21.539 15"})
        ]
      );
  }
});

export default ChatSunSharp;
export { ChatSunSharp };
