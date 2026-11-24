import { defineComponent, h } from 'vue';

const FormControlsGridX = defineComponent({
  name: 'FormControlsGridX',
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
          h('path', {"d":"M13 2L22 2L22 11L13 11Z"}),
          h('path', {"d":"M11 13L2 13L2 22L11 22Z"}),
          h('path', {"d":"M5 18L6 19L8 16"}),
          h('path', {"d":"M16 5L19 8"}),
          h('path', {"d":"M16 8L19 5"}),
          h('path', {"d":"M16.496 16.496L19.004 19.004"}),
          h('path', {"d":"M16.496 19.004L19.004 16.496"}),
          h('path', {"d":"M10.5 6.25C10.5 8.598 8.598 10.5 6.25 10.5C3.902 10.5 2 8.598 2 6.25C2 3.902 3.902 2 6.25 2C8.598 2 10.5 3.902 10.5 6.25Z"}),
          h('path', {"d":"M6.75 6.25C6.75 6.527 6.527 6.75 6.25 6.75C5.973 6.75 5.75 6.527 5.75 6.25C5.75 5.973 5.973 5.75 6.25 5.75C6.527 5.75 6.75 5.973 6.75 6.25Z"}),
          h('path', {"d":"M22 17.75C22 20.098 20.098 22 17.75 22C15.402 22 13.5 20.098 13.5 17.75C13.5 15.402 15.402 13.5 17.75 13.5C20.098 13.5 22 15.402 22 17.75Z"})
        ]
      );
  }
});

export default FormControlsGridX;
export { FormControlsGridX };
