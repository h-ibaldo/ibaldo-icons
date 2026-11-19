import { defineComponent, h } from 'vue';

const ChatSearchTooltip = defineComponent({
  name: 'ChatSearchTooltip',
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
          h('path', {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z"}),
          h('path', {"d":"M15.02 9.547C15.02 11.48 13.449 13.047 11.52 13.047C9.582 13.047 8.02 11.48 8.02 9.547C8.02 7.617 9.582 6.047 11.52 6.047C13.449 6.047 15.02 7.617 15.02 9.547Z"}),
          h('path', {"d":"M13.992 12.023L16.016 14.047"})
        ]
      );
  }
});

export default ChatSearchTooltip;
export { ChatSearchTooltip };
