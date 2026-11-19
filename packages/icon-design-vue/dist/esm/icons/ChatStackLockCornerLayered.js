import { defineComponent, h } from 'vue';

const ChatStackLockCornerLayered = defineComponent({
  name: 'ChatStackLockCornerLayered',
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
          h('path', {"d":"M18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L11 18"}),
          h('path', {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 10"}),
          h('path', {"d":"M22 22L14 22L14 17L22 17Z"}),
          h('path', {"d":"M15 17L15 15C15 13.344 16.344 12 18 12C19.656 12 21 13.344 21 15L21 17"})
        ]
      );
  }
});

export default ChatStackLockCornerLayered;
export { ChatStackLockCornerLayered };
