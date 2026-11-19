import { defineComponent, h } from 'vue';

const ChatStackLockFacing = defineComponent({
  name: 'ChatStackLockFacing',
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
          h('path', {"d":"M13 10L7 10L7 6L13 6Z"}),
          h('path', {"d":"M12 6L8 6L8 4C8 2.895 8.895 2 10 2C11.105 2 12 2.895 12 4Z"}),
          h('path', {"d":"M5 2L4 2C2.895 2 2 2.895 2 4L2 18L7 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L15 2"}),
          h('path', {"d":"M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 10.414C22 9.508 21.641 8.641 21 8"})
        ]
      );
  }
});

export default ChatStackLockFacing;
export { ChatStackLockFacing };
