import { defineComponent, h } from 'vue';

const GalleryThumbnails = defineComponent({
  name: 'GalleryThumbnails',
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
          h('path', {"d":"M2 22L3.973 22"}),
          h('path', {"d":"M8 22L9.973 22"}),
          h('path', {"d":"M14 22L15.973 22"}),
          h('path', {"d":"M20 22L21.973 22"}),
          h('path', {"d":"M20 18L4 18C2.895 18 2 17.105 2 16L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 16C22 17.105 21.105 18 20 18Z"})
        ]
      );
  }
});

export default GalleryThumbnails;
export { GalleryThumbnails };
