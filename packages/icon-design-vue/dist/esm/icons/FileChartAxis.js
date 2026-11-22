import { defineComponent, h } from 'vue';

const FileChartAxis = defineComponent({
  name: 'FileChartAxis',
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
          h('path', {"d":"M20 10L20 7.984C20 7.355 19.75 6.75 19.305 6.305L15.695 2.695C15.25 2.25 14.645 2 14.016 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L7 22"}),
          h('path', {"d":"M14 2L14 7C14 7.551 14.449 8 15 8L20 8"}),
          h('path', {"d":"M10 12L10 22L20 22"}),
          h('path', {"d":"M13 19L15 15L17 18L20 13"})
        ]
      );
  }
});

export default FileChartAxis;
export { FileChartAxis };
