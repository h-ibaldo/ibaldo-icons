import { defineComponent, h } from 'vue';

const ChatStackXCornerFlipped = defineComponent({
  name: 'ChatStackXCornerFlipped',
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
          h('path', {"d":"M14 6L10 6L5 2L5 6L4 6C2.895 6 2 6.895 2 8L2 12C2 13.105 2.895 14 4 14L16 14C17.105 14 18 13.105 18 12"}),
          h('path', {"d":"M22 12L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18"}),
          h('path', {"d":"M18 8L22 4"}),
          h('path', {"d":"M22 8L18 4"})
        ]
      );
  }
});

export default ChatStackXCornerFlipped;
export { ChatStackXCornerFlipped };
