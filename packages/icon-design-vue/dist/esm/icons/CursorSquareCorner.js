import { defineComponent, h } from 'vue';

const CursorSquareCorner = defineComponent({
  name: 'CursorSquareCorner',
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
          h('path', {"d":"M10 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 11"}),
          h('path', {"d":"M21.258 15.883L18.895 16.703L20.859 20.305L17.77 21.988L15.809 18.387L13.836 19.93C13.496 20.195 13 19.953 13 19.523L13 10.52C13 10.109 13.453 9.859 13.797 10.082L21.367 14.957C21.73 15.191 21.664 15.738 21.258 15.883Z"})
        ]
      );
  }
});

export default CursorSquareCorner;
export { CursorSquareCorner };
