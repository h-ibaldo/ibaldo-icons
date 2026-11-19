import { defineComponent, h } from 'vue';

const ChatStackWarningNotch = defineComponent({
  name: 'ChatStackWarningNotch',
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
          h('path', {"d":"M10 2L4 2C2.895 2 2 2.895 2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L8 16"}),
          h('path', {"d":"M22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18"}),
          h('path', {"d":"M14.227 3L10.191 9.996C9.422 11.332 10.383 12.996 11.922 12.996L19.996 12.996C21.535 12.996 22.5 11.332 21.73 9.996L17.691 3C16.922 1.664 14.996 1.664 14.227 3Z"}),
          h('path', {"d":"M15.961 6.996L15.961 5.996"}),
          h('path', {"d":"M15.961 9.996L15.961 9.996"})
        ]
      );
  }
});

export default ChatStackWarningNotch;
export { ChatStackWarningNotch };
