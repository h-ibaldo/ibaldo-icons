import { defineComponent, h } from 'vue';

const SquareStackPaperclip = defineComponent({
  name: 'SquareStackPaperclip',
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
          h('path', {"d":"M8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L18 6C19.105 6 20 6.895 20 8L20 12"}),
          h('path', {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L14 2"}),
          h('path', {"d":"M19 22L14 22C12.344 22 11 20.656 11 19C11 17.344 12.344 16 14 16L20.5 16C21.328 16 22 16.672 22 17.5C22 18.328 21.328 19 20.5 19L16 19"})
        ]
      );
  }
});

export default SquareStackPaperclip;
export { SquareStackPaperclip };
