import { defineComponent, h } from 'vue';

const Frame = defineComponent({
  name: 'Frame',
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
          h('path', {"d":"M2 6L22 6"}),
          h('path', {"d":"M2 18L22 18"}),
          h('path', {"d":"M6 22L6 2"}),
          h('path', {"d":"M18 22L18 2"})
        ]
      );
  }
});

export default Frame;
export { Frame };
