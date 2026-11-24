import { defineComponent, h } from 'vue';

const SquareStackPaperclipTilted = defineComponent({
  name: 'SquareStackPaperclipTilted',
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
          h('path', {"d":"M20 22L8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L20 6C21.105 6 22 6.895 22 8L22 20C22 21.105 21.105 22 20 22Z"}),
          h('path', {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L17 2"}),
          h('path', {"d":"M18 15L14.828 18.172C13.723 19.277 11.934 19.277 10.828 18.172C9.723 17.066 9.723 15.277 10.828 14.172L15.586 9.414C16.137 8.863 17.035 8.863 17.586 9.414C18.137 9.965 18.137 10.863 17.586 11.414L13.828 15.172"})
        ]
      );
  }
});

export default SquareStackPaperclipTilted;
export { SquareStackPaperclipTilted };
