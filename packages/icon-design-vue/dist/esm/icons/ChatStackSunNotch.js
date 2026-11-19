import { defineComponent, h } from 'vue';

const ChatStackSunNotch = defineComponent({
  name: 'ChatStackSunNotch',
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
          h('path', {"d":"M12 2L4 2C2.895 2 2 2.895 2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L12 14"}),
          h('path', {"d":"M22 15L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18"}),
          h('path', {"d":"M16 12C13.789 12 12 10.211 12 8C12 5.789 13.789 4 16 4C18.211 4 20 5.789 20 8C20 10.211 18.211 12 16 12Z"}),
          h('path', {"d":"M16 2L16 4"}),
          h('path', {"d":"M16 12L16 14"}),
          h('path', {"d":"M21.195 5L19.465 6"}),
          h('path', {"d":"M12.535 10L10.805 11"}),
          h('path', {"d":"M21.195 11L19.465 10"}),
          h('path', {"d":"M12.535 6L10.805 5"})
        ]
      );
  }
});

export default ChatStackSunNotch;
export { ChatStackSunNotch };
