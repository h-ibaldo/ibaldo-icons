import { defineComponent, h } from 'vue';

const SquareDoubleArrowDown = defineComponent({
  name: 'SquareDoubleArrowDown',
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
          h('path', {"d":"M2 21.125L2 15.875C2 15.391 2.391 15 2.875 15L8.125 15C8.609 15 9 15.391 9 15.875L9 21.125C9 21.609 8.609 22 8.125 22L2.875 22C2.391 22 2 21.609 2 21.125Z"}),
          h('path', {"d":"M2 8.125L2 2.875C2 2.391 2.391 2 2.875 2L8.125 2C8.609 2 9 2.391 9 2.875L9 8.125C9 8.609 8.609 9 8.125 9L2.875 9C2.391 9 2 8.609 2 8.125Z"}),
          h('path', {"d":"M18 2L18 22"}),
          h('path', {"d":"M14 18L18 22L22 18"})
        ]
      );
  }
});

export default SquareDoubleArrowDown;
export { SquareDoubleArrowDown };
