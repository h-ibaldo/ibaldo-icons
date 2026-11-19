import { defineComponent, h } from 'vue';

const TriangleRightTiltedCircle = defineComponent({
  name: 'TriangleRightTiltedCircle',
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
          h('path', {"d":"M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z"}),
          h('path', {"d":"M15.711 12.711L11.289 8.289C10.73 7.73 9.777 8.008 9.605 8.777L8.34 14.465C8.184 15.18 8.82 15.816 9.535 15.66L15.223 14.395C15.992 14.223 16.27 13.27 15.711 12.711Z"})
        ]
      );
  }
});

export default TriangleRightTiltedCircle;
export { TriangleRightTiltedCircle };
