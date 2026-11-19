import { defineComponent, h } from 'vue';

const ChatUnderlineWide = defineComponent({
  name: 'ChatUnderlineWide',
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
          h('path', {"d":"M16 2L8 2C4.688 2 2 4.688 2 8C2 10.973 4.164 13.434 7 13.91L7 18L11.445 14L16 14C19.313 14 22 11.313 22 8C22 4.688 19.313 2 16 2Z"}),
          h('path', {"d":"M19 22L5 22"})
        ]
      );
  }
});

export default ChatUnderlineWide;
export { ChatUnderlineWide };
