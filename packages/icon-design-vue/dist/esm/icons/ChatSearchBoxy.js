import { defineComponent, h } from 'vue';

const ChatSearchBoxy = defineComponent({
  name: 'ChatSearchBoxy',
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
          h('path', {"d":"M15 9.5C15 11.434 13.434 13 11.5 13C9.566 13 8 11.434 8 9.5C8 7.566 9.566 6 11.5 6C13.434 6 15 7.566 15 9.5Z"}),
          h('path', {"d":"M13.973 11.973L16 14"}),
          h('path', {"d":"M2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z"})
        ]
      );
  }
});

export default ChatSearchBoxy;
export { ChatSearchBoxy };
