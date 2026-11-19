import { defineComponent, h } from 'vue';

const ChatStackDollarCornerBoxy = defineComponent({
  name: 'ChatStackDollarCornerBoxy',
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
          h('path', {"d":"M22 9L22 5C22 3.344 20.656 2 19 2L8 2"}),
          h('path', {"d":"M21 13.5L20.449 13.316C19.82 13.105 19.16 13 18.5 13C17.395 13 16.5 13.895 16.5 15C16.5 16.105 17.395 17 18.5 17L19.5 17C20.605 17 21.5 17.895 21.5 19C21.5 20.105 20.605 21 19.5 21C18.84 21 18.18 20.895 17.551 20.684L17 20.5"}),
          h('path', {"d":"M19 12L19 13"}),
          h('path', {"d":"M19 21L19 22"}),
          h('path', {"d":"M17.816 8C17.402 6.84 16.305 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L13 18"})
        ]
      );
  }
});

export default ChatStackDollarCornerBoxy;
export { ChatStackDollarCornerBoxy };
