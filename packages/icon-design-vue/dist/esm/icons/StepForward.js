import { defineComponent, h } from 'vue';

const StepForward = defineComponent({
  name: 'StepForward',
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
          h('path', {"d":"M8 4.918L8 19.082C8 20.32 9.371 21.063 10.41 20.391L21.293 13.309C22.234 12.691 22.234 11.309 21.293 10.691L10.41 3.609C9.371 2.938 8 3.68 8 4.918Z"}),
          h('path', {"d":"M2 4L2 20"})
        ]
      );
  }
});

export default StepForward;
export { StepForward };
