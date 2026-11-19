import { defineComponent, h } from 'vue';

const ChatStackSettings = defineComponent({
  name: 'ChatStackSettings',
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
          h('path', {"d":"M10.098 3L4.902 3L2.305 7.5L4.902 12L10.098 12L12.695 7.5Z"}),
          h('path', {"d":"M8.5 7.5C8.5 6.945 8.051 6.5 7.5 6.5C6.949 6.5 6.5 6.945 6.5 7.5C6.5 8.055 6.949 8.5 7.5 8.5C8.051 8.5 8.5 8.055 8.5 7.5Z"}),
          h('path', {"d":"M8.613 15.445C9.672 17.469 12 18.898 14.73 18.988C16.211 20.141 18.383 21 21 21C20.34 20.34 19.691 19.242 19.316 17.715C20.949 16.617 22 14.918 22 13C22 9.977 19.391 7.488 16 7.07"})
        ]
      );
  }
});

export default ChatStackSettings;
export { ChatStackSettings };
