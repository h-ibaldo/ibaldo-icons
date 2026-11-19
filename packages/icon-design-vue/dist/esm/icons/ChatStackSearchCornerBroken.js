import { defineComponent, h } from 'vue';

const ChatStackSearchCornerBroken = defineComponent({
  name: 'ChatStackSearchCornerBroken',
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
          h('path', {"d":"M21 5.5C21 7.434 19.434 9 17.5 9C15.566 9 14 7.434 14 5.5C14 3.566 15.566 2 17.5 2C19.434 2 21 3.566 21 5.5Z"}),
          h('path', {"d":"M19.973 7.973L22 10"}),
          h('path', {"d":"M11 2L5 2C3.344 2 2 3.344 2 5L2 13"}),
          h('path', {"d":"M10 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18"}),
          h('path', {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 14"})
        ]
      );
  }
});

export default ChatStackSearchCornerBroken;
export { ChatStackSearchCornerBroken };
