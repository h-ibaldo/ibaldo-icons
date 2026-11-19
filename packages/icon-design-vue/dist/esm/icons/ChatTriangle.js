import { defineComponent, h } from 'vue';

const ChatTriangle = defineComponent({
  name: 'ChatTriangle',
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
          h('path', {"d":"M13.648 10.586L20.352 10.586C21.516 10.586 22.238 9.313 21.637 8.313L18.285 2.727C17.703 1.758 16.297 1.758 15.715 2.727L12.363 8.313C11.762 9.313 12.484 10.586 13.648 10.586Z"}),
          h('path', {"d":"M11 3.039C5.945 3.441 2 6.852 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C15.699 19 18.922 17.387 20.652 15"})
        ]
      );
  }
});

export default ChatTriangle;
export { ChatTriangle };
