import { defineComponent, h } from 'vue';

const SkipBackThick = defineComponent({
  name: 'SkipBackThick',
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
          h('path', {"d":"M22 3.75L22 20.25C22 21.141 20.961 21.625 20.277 21.059L10.379 12.805C9.875 12.387 9.875 11.613 10.379 11.195L20.277 2.941C20.961 2.375 22 2.859 22 3.75Z"}),
          h('path', {"d":"M5 21L3 21C2.449 21 2 20.551 2 20L2 4C2 3.449 2.449 3 3 3L5 3C5.551 3 6 3.449 6 4L6 20C6 20.551 5.551 21 5 21Z"})
        ]
      );
  }
});

export default SkipBackThick;
export { SkipBackThick };
