import { defineComponent, h } from 'vue';

const GlobeDots = defineComponent({
  name: 'GlobeDots',
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
          h('path', {"d":"M8 12C8 16.093 9.575 19.715 12 22C14.425 19.715 16 16.093 16 12C16 7.907 14.425 4.285 12 2C9.575 4.285 8 7.907 8 12Z"}),
          h('path', {"d":"M2 12L18 12"}),
          h('path', {"d":"M22 2L22 2"}),
          h('path', {"d":"M22 6L22 6"}),
          h('path', {"d":"M22 10L22 10"}),
          h('path', {"d":"M18 4.017C16.328 2.757 14.255 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C16.837 22 20.869 18.564 21.796 14"})
        ]
      );
  }
});

export default GlobeDots;
export { GlobeDots };
