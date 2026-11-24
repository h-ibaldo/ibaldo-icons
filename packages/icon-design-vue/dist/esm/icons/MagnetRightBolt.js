import { defineComponent, h } from 'vue';

const MagnetRightBolt = defineComponent({
  name: 'MagnetRightBolt',
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
          h('path', {"d":"M14 22L14 17"}),
          h('path', {"d":"M14 7L14 2"}),
          h('path', {"d":"M18 22L12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2L18 2L18 7L12 7C9.238 7 7 9.238 7 12C7 14.762 9.238 17 12 17L18 17Z"}),
          h('path', {"d":"M22 9L20 11L22 13L20 15"})
        ]
      );
  }
});

export default MagnetRightBolt;
export { MagnetRightBolt };
