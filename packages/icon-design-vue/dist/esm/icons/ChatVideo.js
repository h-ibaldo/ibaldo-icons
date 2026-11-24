import { defineComponent, h } from 'vue';

const ChatVideo = defineComponent({
  name: 'ChatVideo',
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
          h('path', {"d":"M18 4L18 3.156C18 2.516 17.484 2 16.848 2L11.152 2C10.516 2 10 2.516 10 3.156L10 8.844C10 9.484 10.516 10 11.152 10L16.848 10C17.484 10 18 9.484 18 8.844L18 8L21.277 9.637C21.609 9.805 22 9.563 22 9.191L22 2.809C22 2.438 21.609 2.195 21.277 2.363Z"}),
          h('path', {"d":"M6 4.609C3.574 6.07 2 8.387 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C16.195 19 19.781 16.93 21.266 14"})
        ]
      );
  }
});

export default ChatVideo;
export { ChatVideo };
