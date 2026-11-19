import { defineComponent, h } from 'vue';

const SkipBackDoubleThick = defineComponent({
  name: 'SkipBackDoubleThick',
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
          h('path', {"d":"M3 5L5 5C5.551 5 6 5.449 6 6L6 18C6 18.551 5.551 19 5 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5Z"}),
          h('path', {"d":"M22 17.586L22 6.414C22 5.523 20.922 5.078 20.293 5.707L14 12L20.293 18.293C20.922 18.922 22 18.477 22 17.586Z"}),
          h('path', {"d":"M14 17.586L14 6.414C14 5.523 12.922 5.078 12.293 5.707L6 12L12.293 18.293C12.922 18.922 14 18.477 14 17.586Z"})
        ]
      );
  }
});

export default SkipBackDoubleThick;
export { SkipBackDoubleThick };
