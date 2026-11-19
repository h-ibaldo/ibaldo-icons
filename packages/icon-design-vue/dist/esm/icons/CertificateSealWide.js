import { defineComponent, h } from 'vue';

const CertificateSealWide = defineComponent({
  name: 'CertificateSealWide',
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
          h('path', {"d":"M6 18L4 18C2.895 18 2 17.105 2 16L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 16C22 17.105 21.105 18 20 18L18 18"}),
          h('path', {"d":"M12 10.863L13.656 10L14.219 11.781L16 12.344L15.137 14L16 15.656L14.219 16.219L13.656 18L12 17.137L10.344 18L9.781 16.219L8 15.656L8.863 14L8 12.344L9.781 11.781L10.344 10Z"}),
          h('path', {"d":"M10 16.91L10 22L12 21L14 22L14 16.91"}),
          h('path', {"d":"M6 6L18 6"})
        ]
      );
  }
});

export default CertificateSealWide;
export { CertificateSealWide };
