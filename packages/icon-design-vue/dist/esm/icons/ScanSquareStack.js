import { defineComponent, h } from 'vue';

const ScanSquareStack = defineComponent({
  name: 'ScanSquareStack',
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
          h('path', {"d":"M22 17L22 20C22 21.105 21.105 22 20 22L17 22"}),
          h('path', {"d":"M2 7L2 4C2 2.895 2.895 2 4 2L7 2"}),
          h('path', {"d":"M17 2L20 2C21.105 2 22 2.895 22 4L22 7"}),
          h('path', {"d":"M7 22L4 22C2.895 22 2 21.105 2 20L2 17"}),
          h('path', {"d":"M7 6L12 6C12.551 6 13 6.449 13 7L13 11C13 11.551 12.551 12 12 12L7 12C6.449 12 6 11.551 6 11L6 7C6 6.449 6.449 6 7 6Z"}),
          h('path', {"d":"M12 12L17 12C17.551 12 18 12.449 18 13L18 17C18 17.551 17.551 18 17 18L12 18C11.449 18 11 17.551 11 17L11 13C11 12.449 11.449 12 12 12Z"})
        ]
      );
  }
});

export default ScanSquareStack;
export { ScanSquareStack };
