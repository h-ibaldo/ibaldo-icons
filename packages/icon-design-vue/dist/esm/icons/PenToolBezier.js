import { defineComponent, h } from 'vue';

const PenToolBezier = defineComponent({
  name: 'PenToolBezier',
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
          h('path', {"d":"M3 12C3 7.031 7.031 3 12 3C16.969 3 21 7.031 21 12"}),
          h('path', {"d":"M20 11L22 11L22 13L20 13Z"}),
          h('path', {"d":"M2 11L4 11L4 13L2 13Z"}),
          h('path', {"d":"M11 2L13 2L13 4L11 4Z"}),
          h('path', {"d":"M3 3L21 3"}),
          h('path', {"d":"M20 3C20 2.449 20.449 2 21 2C21.551 2 22 2.449 22 3C22 3.551 21.551 4 21 4C20.449 4 20 3.551 20 3Z"}),
          h('path', {"d":"M11 14C11 13.449 11.449 13 12 13C12.551 13 13 13.449 13 14C13 14.551 12.551 15 12 15C11.449 15 11 14.551 11 14Z"}),
          h('path', {"d":"M2 3C2 2.449 2.449 2 3 2C3.551 2 4 2.449 4 3C4 3.551 3.551 4 3 4C2.449 4 2 3.551 2 3Z"}),
          h('path', {"d":"M9 19L7 14L11 7L13 7L17 14L15 19"}),
          h('path', {"d":"M8 19L16 19L16 22L8 22Z"}),
          h('path', {"d":"M12 7L12 14"})
        ]
      );
  }
});

export default PenToolBezier;
export { PenToolBezier };
