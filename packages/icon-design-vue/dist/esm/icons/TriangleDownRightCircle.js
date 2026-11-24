import { defineComponent, h } from 'vue';

const TriangleDownRightCircle = defineComponent({
  name: 'TriangleDownRightCircle',
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
          h('path', {"d":"M15.711 11.289L11.289 15.711C10.73 16.27 9.777 15.992 9.605 15.223L8.34 9.535C8.184 8.82 8.82 8.184 9.535 8.34L15.223 9.605C15.992 9.777 16.27 10.73 15.711 11.289Z"})
        ]
      );
  }
});

export default TriangleDownRightCircle;
export { TriangleDownRightCircle };
