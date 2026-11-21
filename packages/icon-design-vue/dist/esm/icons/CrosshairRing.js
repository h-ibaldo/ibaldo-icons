import { defineComponent, h } from 'vue';

const CrosshairRing = defineComponent({
  name: 'CrosshairRing',
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
          h('path', {"d":"M3 12C3 7.031 7.031 3 12 3C16.969 3 21 7.031 21 12C21 16.969 16.969 21 12 21C7.031 21 3 16.969 3 12Z"}),
          h('path', {"d":"M7 12C7 9.238 9.238 7 12 7C14.762 7 17 9.238 17 12C17 14.762 14.762 17 12 17C9.238 17 7 14.762 7 12Z"}),
          h('path', {"d":"M12 2L12 9"}),
          h('path', {"d":"M12 15L12 22"}),
          h('path', {"d":"M22 12L15 12"}),
          h('path', {"d":"M9 12L2 12"})
        ]
      );
  }
});

export default CrosshairRing;
export { CrosshairRing };
