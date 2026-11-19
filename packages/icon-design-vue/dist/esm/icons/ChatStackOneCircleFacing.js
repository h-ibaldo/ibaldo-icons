import { defineComponent, h } from 'vue';

const ChatStackOneCircleFacing = defineComponent({
  name: 'ChatStackOneCircleFacing',
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
          h('path', {"d":"M9 2L4 2C2.895 2 2 2.895 2 5L2 19L7 15L11 15"}),
          h('path', {"d":"M8 18C8 19.105 8.895 20 10 20L17 20L22 22L22 15"}),
          h('path', {"d":"M22 7.5C22 10.535 19.535 13 16.5 13C13.465 13 11 10.535 11 7.5C11 4.465 13.465 2 16.5 2C19.535 2 22 4.465 22 7.5Z"}),
          h('path', {"d":"M17 9L17 6L16 6"})
        ]
      );
  }
});

export default ChatStackOneCircleFacing;
export { ChatStackOneCircleFacing };
