import { defineComponent, h } from 'vue';

const ChatStackOneCircleBoxy = defineComponent({
  name: 'ChatStackOneCircleBoxy',
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
          h('path', {"d":"M11 18L7 18L2 22L2 9C2 7.344 3.344 6 5 6L15 6C16.656 6 18 7.344 18 9L18 11"}),
          h('path', {"d":"M22 16.5C22 19.535 19.539 22 16.5 22C13.461 22 11 19.535 11 16.5C11 13.465 13.461 11 16.5 11C19.539 11 22 13.465 22 16.5Z"}),
          h('path', {"d":"M17 18L17 15L16 15"}),
          h('path', {"d":"M22 9L22 5C22 3.344 20.656 2 19 2L8 2"})
        ]
      );
  }
});

export default ChatStackOneCircleBoxy;
export { ChatStackOneCircleBoxy };
