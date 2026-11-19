import { defineComponent, h } from 'vue';

const CardImageCursor = defineComponent({
  name: 'CardImageCursor',
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
          h('path', {"d":"M22 13L22 4C22 2.895 21.105 2 20 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L13 22"}),
          h('path', {"d":"M18 12L18 6L6 6L6 14L10 14"}),
          h('path', {"d":"M12 18L6 18"}),
          h('path', {"d":"M22 22L19 19"}),
          h('path', {"d":"M22 17L14 14L17 22L18 18Z"})
        ]
      );
  }
});

export default CardImageCursor;
export { CardImageCursor };
