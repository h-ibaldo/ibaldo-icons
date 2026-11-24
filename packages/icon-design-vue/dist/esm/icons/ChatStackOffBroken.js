import { defineComponent, h } from 'vue';

const ChatStackOffBroken = defineComponent({
  name: 'ChatStackOffBroken',
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
          h('path', {"d":"M16 2L5 2C3.344 2 2 3.344 2 5L2 13"}),
          h('path', {"d":"M22 2L4 21"}),
          h('path', {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 9C22 8.762 21.965 8.535 21.914 8.313"}),
          h('path', {"d":"M18.211 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.035 6.527 16.949 7.328 17.488"})
        ]
      );
  }
});

export default ChatStackOffBroken;
export { ChatStackOffBroken };
