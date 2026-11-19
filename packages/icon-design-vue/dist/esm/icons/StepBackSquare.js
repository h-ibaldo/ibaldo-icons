import { defineComponent, h } from 'vue';

const StepBackSquare = defineComponent({
  name: 'StepBackSquare',
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
          h('path', {"d":"M17 7L17 17"}),
          h('path', {"d":"M13.055 8.164L13.055 15.836C13.055 16.688 12.059 17.152 11.41 16.598L6.895 12.762C6.426 12.363 6.426 11.637 6.895 11.238L11.41 7.402C12.059 6.848 13.055 7.309 13.055 8.164Z"}),
          h('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"})
        ]
      );
  }
});

export default StepBackSquare;
export { StepBackSquare };
