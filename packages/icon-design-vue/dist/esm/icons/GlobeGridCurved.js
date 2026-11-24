import { defineComponent, h } from 'vue';

const GlobeGridCurved = defineComponent({
  name: 'GlobeGridCurved',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M3.062 7.534C5.87 8.48 8.873 9 12 9C15.127 9 18.13 8.48 20.938 7.534"}),
          h('path', {"d":"M20.938 16.466C18.13 15.52 15.127 15 12 15C8.873 15 5.87 15.52 3.062 16.466"}),
          h('path', {"d":"M8 12C8 16.093 9.575 19.715 12 22C14.425 19.715 16 16.093 16 12C16 7.907 14.425 4.285 12 2C9.575 4.285 8 7.907 8 12Z"})
        ]
      );
  }
});

export default GlobeGridCurved;
export { GlobeGridCurved };
