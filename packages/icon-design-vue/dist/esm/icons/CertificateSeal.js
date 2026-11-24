import { defineComponent, h } from 'vue';

const CertificateSeal = defineComponent({
  name: 'CertificateSeal',
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
          h('path', {"d":"M20.555 13.297L21.98 11.871L20.555 10.445L20.555 8.309L18.414 8.309L16.992 6.883L15.563 8.309L13.426 8.309L13.426 10.445L12 11.871L13.426 13.297L13.426 15.438L15.563 15.438L16.992 16.863L18.414 15.438L20.555 15.438Z"}),
          h('path', {"d":"M14 15.621L14 22L17 21L20 22L20 15.621"}),
          h('path', {"d":"M11 20L5 20C3.895 20 3 19.105 3 18L3 4C3 2.895 3.895 2 5 2L18 2C19.105 2 20 2.895 20 4L20 5"}),
          h('path', {"d":"M7 7L10 7"}),
          h('path', {"d":"M7 11L8 11"}),
          h('path', {"d":"M7 15L9 15"})
        ]
      );
  }
});

export default CertificateSeal;
export { CertificateSeal };
