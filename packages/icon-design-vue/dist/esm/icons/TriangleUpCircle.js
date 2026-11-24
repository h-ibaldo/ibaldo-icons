import { defineComponent, h } from 'vue';

const TriangleUpCircle = defineComponent({
  name: 'TriangleUpCircle',
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
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"}),
          h('path', {"d":"M15.195 15L8.805 15C8.02 15 7.539 14.137 7.957 13.469L11.152 8.355C11.543 7.73 12.457 7.73 12.848 8.355L16.043 13.469C16.461 14.137 15.98 15 15.195 15Z"})
        ]
      );
  }
});

export default TriangleUpCircle;
export { TriangleUpCircle };
