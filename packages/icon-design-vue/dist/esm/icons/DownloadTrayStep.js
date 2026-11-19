import { defineComponent, h } from 'vue';

const DownloadTrayStep = defineComponent({
  name: 'DownloadTrayStep',
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
          h('path', {"d":"M17 11L12 16L7 11"}),
          h('path', {"d":"M12 3L12 16"}),
          h('path', {"d":"M22 18L19 18L19 21L5 21L5 18L2 18"})
        ]
      );
  }
});

export default DownloadTrayStep;
export { DownloadTrayStep };
