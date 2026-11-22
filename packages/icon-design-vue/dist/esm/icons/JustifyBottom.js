import { defineComponent, h } from 'vue';

const JustifyBottom = defineComponent({
  name: 'JustifyBottom',
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
          h('path', {"d":"M2 22L22 22"}),
          h('path', {"d":"M8 7L8 3C8 2.449 8.449 2 9 2L15 2C15.551 2 16 2.449 16 3L16 7C16 7.551 15.551 8 15 8L9 8C8.449 8 8 7.551 8 7Z"}),
          h('path', {"d":"M6 17L6 13C6 12.449 6.449 12 7 12L17 12C17.551 12 18 12.449 18 13L18 17C18 17.551 17.551 18 17 18L7 18C6.449 18 6 17.551 6 17Z"})
        ]
      );
  }
});

export default JustifyBottom;
export { JustifyBottom };
