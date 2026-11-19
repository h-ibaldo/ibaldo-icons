import { defineComponent, h } from 'vue';

const ChatStackXCornerFlat = defineComponent({
  name: 'ChatStackXCornerFlat',
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
          h('path', {"d":"M22 22L6 22C4.895 22 4 21.105 4 20L4 16C4 14.895 4.895 14 6 14L18 14C19.105 14 20 14.895 20 16L20 19Z"}),
          h('path', {"d":"M18 6L22 2"}),
          h('path', {"d":"M22 6L18 2"}),
          h('path', {"d":"M14 2L6 2C4.895 2 4 2.895 4 4L4 7L2 10L18 10C18.738 10 19.375 9.598 19.723 9"})
        ]
      );
  }
});

export default ChatStackXCornerFlat;
export { ChatStackXCornerFlat };
