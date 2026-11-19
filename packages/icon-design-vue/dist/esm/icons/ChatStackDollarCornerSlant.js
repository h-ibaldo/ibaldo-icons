import { defineComponent, h } from 'vue';

const ChatStackDollarCornerSlant = defineComponent({
  name: 'ChatStackDollarCornerSlant',
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
          h('path', {"d":"M2 14L2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L11 6"}),
          h('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L11 2"}),
          h('path', {"d":"M7 3.5L6.449 3.316C5.82 3.105 5.16 3 4.5 3C3.395 3 2.5 3.895 2.5 5C2.5 6.105 3.395 7 4.5 7L5.5 7C6.605 7 7.5 7.895 7.5 9C7.5 10.105 6.605 11 5.5 11C4.84 11 4.18 10.895 3.551 10.684L3 10.5"}),
          h('path', {"d":"M5 2L5 3"}),
          h('path', {"d":"M5 11L5 12"})
        ]
      );
  }
});

export default ChatStackDollarCornerSlant;
export { ChatStackDollarCornerSlant };
