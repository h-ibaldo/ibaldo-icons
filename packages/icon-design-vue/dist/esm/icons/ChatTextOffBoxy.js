import { defineComponent, h } from 'vue';

const ChatTextOffBoxy = defineComponent({
  name: 'ChatTextOffBoxy',
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
          h('path', {"d":"M22 16L22 8C22 6.344 20.656 5 19 5L11.738 5"}),
          h('path', {"d":"M5.844 5L5 5C3.344 5 2 6.344 2 8L2 22L7 18L18.16 18"}),
          h('path', {"d":"M7 10L10.5 10"}),
          h('path', {"d":"M15 10L17 10"}),
          h('path', {"d":"M7 14L14 14"})
        ]
      );
  }
});

export default ChatTextOffBoxy;
export { ChatTextOffBoxy };
