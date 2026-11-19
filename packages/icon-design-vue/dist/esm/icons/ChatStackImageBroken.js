import { defineComponent, h } from 'vue';

const ChatStackImageBroken = defineComponent({
  name: 'ChatStackImageBroken',
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
          h('path', {"d":"M17 2L5 2C3.344 2 2 3.344 2 5L2 13"}),
          h('path', {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 9C22 7.344 20.656 6 19 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18"}),
          h('path', {"d":"M9 13L11 11L15 15"}),
          h('path', {"d":"M15 15L17 13L19 15"}),
          h('path', {"d":"M15.5 10C15.223 10 15 9.777 15 9.5C15 9.223 15.223 9 15.5 9C15.777 9 16 9.223 16 9.5C16 9.777 15.777 10 15.5 10Z"})
        ]
      );
  }
});

export default ChatStackImageBroken;
export { ChatStackImageBroken };
