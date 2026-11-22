import { defineComponent, h } from 'vue';

const GalleryTop = defineComponent({
  name: 'GalleryTop',
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
          h('path', {"d":"M5 7L19 7"}),
          h('path', {"d":"M7 2L17 2"}),
          h('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 14C2 12.895 2.895 12 4 12L20 12C21.105 12 22 12.895 22 14L22 20C22 21.105 21.105 22 20 22Z"})
        ]
      );
  }
});

export default GalleryTop;
export { GalleryTop };
