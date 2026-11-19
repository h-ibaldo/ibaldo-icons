import { defineComponent, h } from 'vue';

const ChatArrowRightOutBoxy = defineComponent({
  name: 'ChatArrowRightOutBoxy',
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
          h('path', {"d":"M10 4L5 4C3.344 4 2 5.344 2 7L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 10"}),
          h('path', {"d":"M15 4L22 4"}),
          h('path', {"d":"M20 2L22 4L20 6"})
        ]
      );
  }
});

export default ChatArrowRightOutBoxy;
export { ChatArrowRightOutBoxy };
