import { defineComponent, h } from 'vue';

const ReceiptDollarDotted = defineComponent({
  name: 'ReceiptDollarDotted',
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
          h('path', {"d":"M14 21L4 21"}),
          h('path', {"d":"M6 19L6 2L11 4L14 2L18 4L22 2L22 9"}),
          h('path', {"d":"M18 8L13 8"}),
          h('path', {"d":"M10 8L10 8"}),
          h('path', {"d":"M14.5 12L13 12"}),
          h('path', {"d":"M10 12L10 12"}),
          h('path', {"d":"M13.5 16L13 16"}),
          h('path', {"d":"M10 16L10 16"}),
          h('path', {"d":"M6 19C6 20.105 5.105 21 4 21C2.895 21 2 20.105 2 19"}),
          h('path', {"d":"M6 15L2 15L2 19"}),
          h('path', {"d":"M21 13.535L20.449 13.348C19.82 13.141 19.16 13.035 18.5 13.035C17.395 13.035 16.5 13.93 16.5 15.035C16.5 16.137 17.395 17.035 18.5 17.035L19.5 17.035C20.605 17.035 21.5 17.93 21.5 19.035C21.5 20.137 20.605 21.035 19.5 21.035C18.84 21.035 18.18 20.926 17.551 20.719L17 20.535"}),
          h('path', {"d":"M19 12.035L19 13.035"}),
          h('path', {"d":"M19 21.035L19 22.035"})
        ]
      );
  }
});

export default ReceiptDollarDotted;
export { ReceiptDollarDotted };
