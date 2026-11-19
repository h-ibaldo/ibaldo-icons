import { defineComponent, h } from 'vue';

const ChatStackDotsCircleSlant = defineComponent({
  name: 'ChatStackDotsCircleSlant',
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
          h('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L14 2"}),
          h('path', {"d":"M2 14L2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.695 17.164 6.598 16 6.184"}),
          h('path', {"d":"M12 7C12 9.762 9.762 12 7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2C9.762 2 12 4.238 12 7Z"}),
          h('path', {"d":"M5.5 7L5.5 7"}),
          h('path', {"d":"M8.5 7L8.5 7"})
        ]
      );
  }
});

export default ChatStackDotsCircleSlant;
export { ChatStackDotsCircleSlant };
