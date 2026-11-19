import { defineComponent, h } from 'vue';

const ChatStackOneCircleSlant = defineComponent({
  name: 'ChatStackOneCircleSlant',
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
          h('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L15 2"}),
          h('path', {"d":"M2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 8.117 17.609 7.332 17 6.785"}),
          h('path', {"d":"M13 7.5C13 10.535 10.535 13 7.5 13C4.465 13 2 10.535 2 7.5C2 4.465 4.465 2 7.5 2C10.535 2 13 4.465 13 7.5Z"}),
          h('path', {"d":"M8 9L8 6L7 6"})
        ]
      );
  }
});

export default ChatStackOneCircleSlant;
export { ChatStackOneCircleSlant };
