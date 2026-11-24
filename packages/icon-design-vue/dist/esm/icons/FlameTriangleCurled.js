import { defineComponent, h } from 'vue';

const FlameTriangleCurled = defineComponent({
  name: 'FlameTriangleCurled',
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
          h('path', {"d":"M10.719 4.094L2.395 17.719C1.785 18.719 2.504 20 3.676 20L20.324 20C21.496 20 22.215 18.719 21.605 17.719L13.281 4.094C12.695 3.137 11.305 3.137 10.719 4.094Z"}),
          h('path', {"d":"M9 14C9 15.656 10.344 17 12 17C13.656 17 15 15.656 15 14C15 11.902 12.625 11.043 12 9C11.074 10.551 11.211 11.59 12.098 12.977C12.707 13.926 11.781 14.73 10.809 14.285C10.32 14.063 9.852 13.297 9.746 11.922C9.129 12.586 9 13.551 9 14Z"})
        ]
      );
  }
});

export default FlameTriangleCurled;
export { FlameTriangleCurled };
