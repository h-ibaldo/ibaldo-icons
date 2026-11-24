import { defineComponent, h } from 'vue';

const SquareDoubleArrowUp = defineComponent({
  name: 'SquareDoubleArrowUp',
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
          h('path', {"d":"M2 2.875L2 8.125C2 8.609 2.391 9 2.875 9L8.125 9C8.609 9 9 8.609 9 8.125L9 2.875C9 2.391 8.609 2 8.125 2L2.875 2C2.391 2 2 2.391 2 2.875Z"}),
          h('path', {"d":"M2 15.875L2 21.125C2 21.609 2.391 22 2.875 22L8.125 22C8.609 22 9 21.609 9 21.125L9 15.875C9 15.391 8.609 15 8.125 15L2.875 15C2.391 15 2 15.391 2 15.875Z"}),
          h('path', {"d":"M18 22L18 2"}),
          h('path', {"d":"M14 6L18 2L22 6"})
        ]
      );
  }
});

export default SquareDoubleArrowUp;
export { SquareDoubleArrowUp };
