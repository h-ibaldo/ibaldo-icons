import { defineComponent, h } from 'vue';

const StepBack = defineComponent({
  name: 'StepBack',
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
          h('path', {"d":"M16 4.918L16 19.082C16 20.32 14.629 21.063 13.59 20.391L2.707 13.309C1.766 12.691 1.766 11.309 2.707 10.691L13.59 3.609C14.629 2.938 16 3.68 16 4.918Z"}),
          h('path', {"d":"M22 4L22 20"})
        ]
      );
  }
});

export default StepBack;
export { StepBack };
