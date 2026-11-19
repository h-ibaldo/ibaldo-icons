import { defineComponent, h } from 'vue';

const ChatTextOffSharp = defineComponent({
  name: 'ChatTextOffSharp',
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
          h('path', {"d":"M21.449 15.25C21.801 14.23 22 13.141 22 12C22 6.477 17.523 2 12 2C11.051 2 10.133 2.141 9.262 2.387"}),
          h('path', {"d":"M3 2L21 21"}),
          h('path', {"d":"M5.383 4.516C3.313 6.348 2 9.02 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C14.789 22 17.309 20.855 19.121 19.016"}),
          h('path', {"d":"M15 10L16 10"}),
          h('path', {"d":"M8 10L10.578 10"}),
          h('path', {"d":"M8 14L14.367 14"})
        ]
      );
  }
});

export default ChatTextOffSharp;
export { ChatTextOffSharp };
