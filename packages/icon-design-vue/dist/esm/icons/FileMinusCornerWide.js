import { defineComponent, h } from 'vue';

const FileMinusCornerWide = defineComponent({
  name: 'FileMinusCornerWide',
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
          h('path', {"d":"M2 14L2 4C2 2.895 2.895 2 4 2L14.918 2L22 9L22 20C22 21.105 21.105 22 20 22L12 22"}),
          h('path', {"d":"M22 10L16 10C14.895 10 14 9.105 14 8L14 2"}),
          h('path', {"d":"M8 19L2 19"})
        ]
      );
  }
});

export default FileMinusCornerWide;
export { FileMinusCornerWide };
