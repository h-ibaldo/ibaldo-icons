import { defineComponent, h } from 'vue';

const ScanFile = defineComponent({
  name: 'ScanFile',
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
          h('path', {"d":"M16 18L8 18C7.448 18 7 17.552 7 17L7 7C7 6.448 7.448 6 8 6L12.586 6C12.851 6 13.105 6.105 13.293 6.293L16.707 9.707C16.895 9.895 17 10.149 17 10.414L17 17C17 17.552 16.552 18 16 18Z"}),
          h('path', {"d":"M12 6L12 11L17 11"}),
          h('path', {"d":"M22 6L22 4C22 2.895 21.105 2 20 2L18 2"}),
          h('path', {"d":"M6 2L4 2C2.895 2 2 2.895 2 4L2 6"}),
          h('path', {"d":"M2 18L2 20C2 21.105 2.895 22 4 22L6 22"}),
          h('path', {"d":"M18 22L20 22C21.105 22 22 21.105 22 20L22 18"})
        ]
      );
  }
});

export default ScanFile;
export { ScanFile };
