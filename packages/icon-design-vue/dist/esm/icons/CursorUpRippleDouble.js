import { defineComponent, h } from 'vue';

const CursorUpRippleDouble = defineComponent({
  name: 'CursorUpRippleDouble',
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
          h('path', {"d":"M10.031 22L10.031 18L7 18L12.031 10L17 18L14.031 18L14.031 22Z"}),
          h('path', {"d":"M16 10C16 7.789 14.211 6 12 6C9.789 6 8 7.789 8 10"}),
          h('path', {"d":"M18.922 14C19.605 12.82 20 11.461 20 10C20 5.582 16.418 2 12 2C7.582 2 4 5.582 4 10C4 11.461 4.398 12.82 5.078 14"})
        ]
      );
  }
});

export default CursorUpRippleDouble;
export { CursorUpRippleDouble };
