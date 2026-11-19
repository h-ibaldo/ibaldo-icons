import { defineComponent, h } from 'vue';

const ChatOffTooltip = defineComponent({
  name: 'ChatOffTooltip',
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
          h('path', {"d":"M22 16L22 7C22 5.344 20.656 4 19 4L11 4"}),
          h('path', {"d":"M4.902 4.012C3.293 4.063 2 5.375 2 7L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L18.156 18"})
        ]
      );
  }
});

export default ChatOffTooltip;
export { ChatOffTooltip };
