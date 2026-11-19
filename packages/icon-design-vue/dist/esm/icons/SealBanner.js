import { defineComponent, h } from 'vue';

const SealBanner = defineComponent({
  name: 'SealBanner',
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
          h('path', {"d":"M17 17L19 15L17 13L17 10L14 10L12 8L10 10L7 10L7 13L5 15L7 17L7 20L10 20L12 22L14 20L17 20Z"}),
          h('path', {"d":"M12 7L5 4L5 2L19 2L19 4Z"})
        ]
      );
  }
});

export default SealBanner;
export { SealBanner };
