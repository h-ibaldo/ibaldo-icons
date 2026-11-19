import { defineComponent, h } from 'vue';

const GlobeGridCursor = defineComponent({
  name: 'GlobeGridCursor',
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
          h('path', {"d":"M21.289 15.305L19.199 16.797L22 19.602L19.602 22L16.801 19.199L15.305 21.289C15.102 21.578 14.652 21.504 14.555 21.164L12.02 12.543C11.922 12.223 12.223 11.922 12.547 12.02L21.164 14.551C21.504 14.652 21.578 15.102 21.289 15.305Z"}),
          h('path', {"d":"M12 9L12 2"}),
          h('path', {"d":"M21.797 10C20.871 5.438 16.836 2 12 2C6.477 2 2 6.477 2 12C2 17.188 5.945 21.445 11 21.949"}),
          h('path', {"d":"M16.898 10C16.438 5.438 14.418 2 12 2C9.238 2 7 6.477 7 12C7 16.84 8.719 20.871 11 21.801"}),
          h('path', {"d":"M2.461 9L21.535 9"}),
          h('path', {"d":"M9 15L2.465 15"})
        ]
      );
  }
});

export default GlobeGridCursor;
export { GlobeGridCursor };
