import { defineComponent, h } from 'vue';

const FormInputCursorTall = defineComponent({
  name: 'FormInputCursorTall',
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
          h('path', {"d":"M3 2L6 2L8 4L10 2L13 2"}),
          h('path', {"d":"M13 22L10 22L8 20L6 22L3 22"}),
          h('path', {"d":"M8 4L8 20"}),
          h('path', {"d":"M5 15L4 15C2.895 15 2 14.105 2 13L2 11C2 9.895 2.895 9 4 9L5 9"}),
          h('path', {"d":"M11 9L20 9C21.105 9 22 9.895 22 11L22 13C22 14.105 21.105 15 20 15L11.043 15"})
        ]
      );
  }
});

export default FormInputCursorTall;
export { FormInputCursorTall };
