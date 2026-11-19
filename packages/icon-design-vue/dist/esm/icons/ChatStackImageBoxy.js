import { defineComponent, h } from 'vue';

const ChatStackImageBoxy = defineComponent({
  name: 'ChatStackImageBoxy',
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
          h('path', {"d":"M2 9L2 22L7 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z"}),
          h('path', {"d":"M22 13L22 5C22 3.344 20.656 2 19 2L7 2"}),
          h('path', {"d":"M5 13L7 11L11 15"}),
          h('path', {"d":"M11 15L13 13L15 15"}),
          h('path', {"d":"M11.5 10C11.223 10 11 9.777 11 9.5C11 9.223 11.223 9 11.5 9C11.777 9 12 9.223 12 9.5C12 9.777 11.777 10 11.5 10Z"})
        ]
      );
  }
});

export default ChatStackImageBoxy;
export { ChatStackImageBoxy };
