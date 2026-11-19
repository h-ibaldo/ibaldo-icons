import { defineComponent, h } from 'vue';

const ChatDotsVertical = defineComponent({
  name: 'ChatDotsVertical',
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
          h('path', {"d":"M22 3L22 3"}),
          h('path', {"d":"M22 7L22 7"}),
          h('path', {"d":"M22 11L22 11"}),
          h('path', {"d":"M17 4.078C15.527 3.398 13.824 3 12 3C6.477 3 2 6.582 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C15.156 19 17.969 17.828 19.801 16"})
        ]
      );
  }
});

export default ChatDotsVertical;
export { ChatDotsVertical };
