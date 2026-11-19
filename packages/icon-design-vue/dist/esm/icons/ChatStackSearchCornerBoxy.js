import { defineComponent, h } from 'vue';

const ChatStackSearchCornerBoxy = defineComponent({
  name: 'ChatStackSearchCornerBoxy',
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
          h('path', {"d":"M21 17.5C21 19.434 19.434 21 17.5 21C15.566 21 14 19.434 14 17.5C14 15.566 15.566 14 17.5 14C19.434 14 21 15.566 21 17.5Z"}),
          h('path', {"d":"M19.977 19.973L22 22"}),
          h('path', {"d":"M18 11L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L11 18"}),
          h('path', {"d":"M22 12L22 5C22 3.344 20.656 2 19 2L7 2"})
        ]
      );
  }
});

export default ChatStackSearchCornerBoxy;
export { ChatStackSearchCornerBoxy };
