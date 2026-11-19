import { defineComponent, h } from 'vue';

const ChatStackCheckDoubleCornerFlipped = defineComponent({
  name: 'ChatStackCheckDoubleCornerFlipped',
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
          h('path', {"d":"M22 13L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18"}),
          h('path', {"d":"M12 7L13.5 9L18 5"}),
          h('path', {"d":"M16.801 10.066L17.5 11L22 7"}),
          h('path', {"d":"M9 5.199L5 2L5 6L4 6C2.895 6 2 6.895 2 8L2 12C2 13.105 2.895 14 4 14L15 14"})
        ]
      );
  }
});

export default ChatStackCheckDoubleCornerFlipped;
export { ChatStackCheckDoubleCornerFlipped };
