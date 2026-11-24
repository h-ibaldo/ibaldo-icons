import { defineComponent, h } from 'vue';

const Aperture = defineComponent({
  name: 'Aperture',
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
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"}),
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"}),
          h('path', {"d":"M16 3L16 14.309"}),
          h('path', {"d":"M21.73 11L12 16.617"}),
          h('path', {"d":"M17.855 20L8 14.309"}),
          h('path', {"d":"M8 21L8 9.691"}),
          h('path', {"d":"M2.27 13L12 7.383"}),
          h('path', {"d":"M6.145 4L16 9.691"})
        ]
      );
  }
});

export default Aperture;
export { Aperture };
