import { defineComponent, h } from 'vue';

const FullscreenCornersIn = defineComponent({
  name: 'FullscreenCornersIn',
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
          h('path', {"d":"M7 2L7 7L2 7"}),
          h('path', {"d":"M17 22L17 17L22 17"}),
          h('path', {"d":"M2 17L7 17L7 22"}),
          h('path', {"d":"M22 7L17 7L17 2"})
        ]
      );
  }
});

export default FullscreenCornersIn;
export { FullscreenCornersIn };
