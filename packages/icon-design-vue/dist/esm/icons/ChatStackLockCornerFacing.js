import { defineComponent, h } from 'vue';

const ChatStackLockCornerFacing = defineComponent({
  name: 'ChatStackLockCornerFacing',
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
          h('path', {"d":"M12 2L4 2C2.895 2 2 2.895 2 4L2 17L7 13L10 13"}),
          h('path', {"d":"M22 16L22 22L17 18L10 18C8.895 18 8 17.105 8 16"})
        ]
      );
  }
});

export default ChatStackLockCornerFacing;
export { ChatStackLockCornerFacing };
