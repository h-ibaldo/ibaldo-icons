import { defineComponent, h } from 'vue';

const Chat = defineComponent({
  name: 'Chat',
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
          h('path', {"d":"M12 2C6.477 2 2 5.582 2 10C2 12.84 3.855 15.328 6.645 16.75C6.664 17.895 6.391 19.078 5.719 20.113C5.48 20.48 5.766 20.973 6.195 20.898C8.313 20.535 9.781 19.23 10.715 17.926C11.137 17.969 11.563 18 12 18C17.523 18 22 14.418 22 10C22 5.582 17.523 2 12 2Z"})
        ]
      );
  }
});

export default Chat;
export { Chat };
