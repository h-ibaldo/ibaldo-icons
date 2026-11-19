import { defineComponent, h } from 'vue';

const ChatTextOff = defineComponent({
  name: 'ChatTextOff',
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
          h('path', {"d":"M3 2L21 21"}),
          h('path', {"d":"M5.664 4.813C3.43 6.277 2 8.508 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C14.133 19 16.109 18.461 17.73 17.551"}),
          h('path', {"d":"M20.867 14.691C21.586 13.586 22 12.332 22 11C22 6.582 17.523 3 12 3C11.297 3 10.613 3.059 9.949 3.168"}),
          h('path', {"d":"M8 9L9 9"}),
          h('path', {"d":"M14 9L16 9"}),
          h('path', {"d":"M8 13L13 13"})
        ]
      );
  }
});

export default ChatTextOff;
export { ChatTextOff };
