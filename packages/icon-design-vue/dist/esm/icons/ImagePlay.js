import { defineComponent, h } from 'vue';

const ImagePlay = defineComponent({
  name: 'ImagePlay',
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
          h('path', {"d":"M22 10L22 20C22 20.551 21.551 21 21 21L3 21C2.449 21 2 20.551 2 20L2 4C2 3.449 2.449 3 3 3L13 3"}),
          h('path', {"d":"M2 19L7.027 14.813C7.598 14.336 8.418 14.316 9.012 14.762L12 17L15.867 13.133C16.492 12.508 17.508 12.508 18.133 13.133L22 17"}),
          h('path', {"d":"M11 9C11 10.105 10.105 11 9 11C7.895 11 7 10.105 7 9C7 7.895 7.895 7 9 7C10.105 7 11 7.895 11 9Z"}),
          h('path', {"d":"M17 2L22 5L17 8Z"})
        ]
      );
  }
});

export default ImagePlay;
export { ImagePlay };
