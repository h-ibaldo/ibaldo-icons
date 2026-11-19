import { defineComponent, h } from 'vue';

const ChatStackDotsVerticalLayered = defineComponent({
  name: 'ChatStackDotsVerticalLayered',
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
          h('path', {"d":"M2 9L2 22L7 18L14 18C15.656 18 17 16.656 17 15L17 9C17 7.344 15.656 6 14 6L5 6C3.344 6 2 7.344 2 9Z"}),
          h('path', {"d":"M20 14L17 14"}),
          h('path', {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L18 2"}),
          h('path', {"d":"M22 2L22 2"}),
          h('path', {"d":"M22 6L22 6"}),
          h('path', {"d":"M22 10L22 10"})
        ]
      );
  }
});

export default ChatStackDotsVerticalLayered;
export { ChatStackDotsVerticalLayered };
