import { defineComponent, h } from 'vue';

const GlobeGridTilted = defineComponent({
  name: 'GlobeGridTilted',
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
          h('path', {"d":"M8.536 14C10.582 17.544 13.758 19.894 17 20.66C17.958 17.469 17.51 13.544 15.464 10C13.418 6.456 10.242 4.106 7 3.34C6.042 6.531 6.49 10.456 8.536 14Z"}),
          h('path', {"d":"M2.237 14.172L18.763 4.632"}),
          h('path', {"d":"M21.763 9.828L5.237 19.368"})
        ]
      );
  }
});

export default GlobeGridTilted;
export { GlobeGridTilted };
