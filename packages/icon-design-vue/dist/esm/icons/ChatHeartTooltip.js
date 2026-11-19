import { defineComponent, h } from 'vue';

const ChatHeartTooltip = defineComponent({
  name: 'ChatHeartTooltip',
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
          h('path', {"d":"M13 6.828L12 7.828L11 6.828C9.895 5.723 8.105 5.723 7 6.828C5.895 7.934 5.895 9.723 7 10.828L10.586 14.414C11.367 15.195 12.633 15.195 13.414 14.414L17 10.828C18.105 9.723 18.105 7.934 17 6.828C15.895 5.723 14.105 5.723 13 6.828Z"})
        ]
      );
  }
});

export default ChatHeartTooltip;
export { ChatHeartTooltip };
