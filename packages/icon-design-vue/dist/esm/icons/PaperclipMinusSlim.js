import { defineComponent, h } from 'vue';

const PaperclipMinusSlim = defineComponent({
  name: 'PaperclipMinusSlim',
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
          h('path', {"d":"M13 9L13 17C13 19.762 10.762 22 8 22C5.238 22 3 19.762 3 17L3 5.5C3 3.566 4.566 2 6.5 2C8.434 2 10 3.566 10 5.5L10 15C10 16.105 9.105 17 8 17C6.895 17 6 16.105 6 15L6 9"}),
          h('path', {"d":"M21 4L16 4"})
        ]
      );
  }
});

export default PaperclipMinusSlim;
export { PaperclipMinusSlim };
