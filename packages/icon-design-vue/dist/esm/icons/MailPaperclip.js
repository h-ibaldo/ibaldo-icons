import { defineComponent, h } from 'vue';

const MailPaperclip = defineComponent({
  name: 'MailPaperclip',
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
          h('path', {"d":"M18 22L12 22C9.789 22 8 20.211 8 18C8 15.789 9.789 14 12 14L20 14C21.105 14 22 14.895 22 16C22 17.105 21.105 18 20 18L14 18"}),
          h('path', {"d":"M4 16L3 16C2.449 16 2 15.551 2 15L2 3C2 2.449 2.449 2 3 2L21 2C21.551 2 22 2.449 22 3L22 10"}),
          h('path', {"d":"M3.109 3L11.332 10.398C11.711 10.738 12.289 10.738 12.668 10.398L20.887 3"})
        ]
      );
  }
});

export default MailPaperclip;
export { MailPaperclip };
