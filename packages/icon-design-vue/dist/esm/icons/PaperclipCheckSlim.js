import { defineComponent, h } from 'vue';

const PaperclipCheckSlim = defineComponent({
  name: 'PaperclipCheckSlim',
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
          h('path', {"d":"M14 8L14 17C14 19.762 11.762 22 9 22C6.238 22 4 19.762 4 17L4 5.5C4 3.566 5.566 2 7.5 2C9.434 2 11 3.566 11 5.5L11 15C11 16.105 10.105 17 9 17C7.895 17 7 16.105 7 15L7 8"}),
          h('path', {"d":"M16 4L18 6L22 2"})
        ]
      );
  }
});

export default PaperclipCheckSlim;
export { PaperclipCheckSlim };
