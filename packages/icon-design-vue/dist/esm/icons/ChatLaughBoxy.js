import { defineComponent, h } from 'vue';

const ChatLaughBoxy = defineComponent({
  name: 'ChatLaughBoxy',
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
          h('path', {"d":"M2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z"}),
          h('path', {"d":"M9 11L15 11C15 12.656 13.656 14 12 14C10.344 14 9 12.656 9 11Z"}),
          h('path', {"d":"M14.5 8C14.223 8 14 7.777 14 7.5C14 7.223 14.223 7 14.5 7C14.777 7 15 7.223 15 7.5C15 7.777 14.777 8 14.5 8Z"}),
          h('path', {"d":"M9.5 8C9.223 8 9 7.777 9 7.5C9 7.223 9.223 7 9.5 7C9.777 7 10 7.223 10 7.5C10 7.777 9.777 8 9.5 8Z"})
        ]
      );
  }
});

export default ChatLaughBoxy;
export { ChatLaughBoxy };
