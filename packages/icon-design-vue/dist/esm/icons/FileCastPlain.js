import { defineComponent, h } from 'vue';

const FileCastPlain = defineComponent({
  name: 'FileCastPlain',
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
          h('path', {"d":"M5 22.034C5 21.481 4.552 21.034 4 21.034"}),
          h('path', {"d":"M9 22.034C9 19.272 6.761 17.034 4 17.034"}),
          h('path', {"d":"M13 22.034C13 17.063 8.971 13.034 4 13.034"}),
          h('path', {"d":"M4 9.034L4 4.034C4 2.929 4.895 2.034 6 2.034L18 2.034C19.105 2.034 20 2.929 20 4.034L20 20.034C20 21.138 19.105 22.034 18 22.034L17 22.034"})
        ]
      );
  }
});

export default FileCastPlain;
export { FileCastPlain };
