import { defineComponent, h } from 'vue';

const ChatStackMinusFacing = defineComponent({
  name: 'ChatStackMinusFacing',
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
          h('path', {"d":"M11 8L7 8"}),
          h('path', {"d":"M2 4L2 17L7 14L14 14C15.105 14 16 13.105 16 12L16 4C16 2.895 15.105 2 14 2L4 2C2.895 2 2 2.895 2 4Z"}),
          h('path', {"d":"M19 8L20 8C21.105 8 22 8.895 22 10L22 22L17 19L10 19C8.895 19 8 18.105 8 17"})
        ]
      );
  }
});

export default ChatStackMinusFacing;
export { ChatStackMinusFacing };
