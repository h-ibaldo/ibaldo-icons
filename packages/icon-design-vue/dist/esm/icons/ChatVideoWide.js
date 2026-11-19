import { defineComponent, h } from 'vue';

const ChatVideoWide = defineComponent({
  name: 'ChatVideoWide',
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
          h('path', {"d":"M18 4L18 3.152C18 2.516 17.484 2 16.844 2L11.156 2C10.516 2 10 2.516 10 3.152L10 8.848C10 9.484 10.516 10 11.156 10L16.844 10C17.484 10 18 9.484 18 8.848L18 8L21.277 9.641C21.609 9.805 22 9.563 22 9.191L22 2.809C22 2.438 21.609 2.195 21.277 2.359Z"}),
          h('path', {"d":"M6 3.684C3.637 4.805 2 7.207 2 10C2 13.172 4.109 15.844 7 16.707L7 21L11.57 17L15 17C17.379 17 19.477 15.813 20.738 14"})
        ]
      );
  }
});

export default ChatVideoWide;
export { ChatVideoWide };
