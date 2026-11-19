import { defineComponent, h } from 'vue';

const StepBackThick = defineComponent({
  name: 'StepBackThick',
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
          h('path', {"d":"M13 4.348L13 19.652C13 20.801 11.641 21.402 10.793 20.633L2.5 13.129C1.832 12.523 1.832 11.477 2.5 10.875L10.793 3.367C11.641 2.598 13 3.199 13 4.348Z"}),
          h('path', {"d":"M21 21L19 21C18.449 21 18 20.551 18 20L18 4C18 3.449 18.449 3 19 3L21 3C21.551 3 22 3.449 22 4L22 20C22 20.551 21.551 21 21 21Z"})
        ]
      );
  }
});

export default StepBackThick;
export { StepBackThick };
