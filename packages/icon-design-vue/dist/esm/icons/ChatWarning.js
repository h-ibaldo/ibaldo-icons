import { defineComponent, h } from 'vue';

const ChatWarning = defineComponent({
  name: 'ChatWarning',
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
          h('path', {"d":"M13.77 3.004L9.902 9.699C9.059 11.168 10.117 13 11.809 13L19.191 13C20.883 13 21.941 11.168 21.098 9.699L17.234 3.004C16.461 1.668 14.539 1.668 13.77 3.004Z"}),
          h('path', {"d":"M15.5 7L15.5 6"}),
          h('path', {"d":"M15.5 10L15.5 10"}),
          h('path', {"d":"M9 3.367C4.941 4.387 2 7.418 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C14.531 19 16.836 18.242 18.598 17"})
        ]
      );
  }
});

export default ChatWarning;
export { ChatWarning };
