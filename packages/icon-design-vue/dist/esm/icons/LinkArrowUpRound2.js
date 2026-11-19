import { defineComponent, h } from 'vue';

const LinkArrowUpRound2 = defineComponent({
  name: 'LinkArrowUpRound2',
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
          h('path', {"d":"M21 5L18 2L15 5"}),
          h('path', {"d":"M18 8L18 2"}),
          h('path', {"d":"M5 17.445C3.809 16.754 3 15.477 3 14C3 11.793 4.789 10 7 10L12 10C14.211 10 16 11.793 16 14C16 15.859 14.723 17.414 13 17.859"}),
          h('path', {"d":"M19 14.555C20.191 15.246 21 16.523 21 18C21 20.207 19.211 22 17 22L12 22C9.789 22 8 20.207 8 18C8 16.141 9.277 14.586 11 14.141"})
        ]
      );
  }
});

export default LinkArrowUpRound2;
export { LinkArrowUpRound2 };
