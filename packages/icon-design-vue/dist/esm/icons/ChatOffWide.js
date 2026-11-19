import { defineComponent, h } from 'vue';

const ChatOffWide = defineComponent({
  name: 'ChatOffWide',
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
          h('path', {"d":"M20.93 14.707C21.605 13.629 22 12.363 22 11C22 7.133 18.867 4 15 4L10.789 4"}),
          h('path', {"d":"M5.684 4.836C3.492 6.016 2 8.336 2 11C2 14.172 4.109 16.848 7 17.707L7 22L11.57 18L15 18C15.941 18 16.84 17.813 17.66 17.473"})
        ]
      );
  }
});

export default ChatOffWide;
export { ChatOffWide };
