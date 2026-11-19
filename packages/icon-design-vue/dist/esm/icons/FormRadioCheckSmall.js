import { defineComponent, h } from 'vue';

const FormRadioCheckSmall = defineComponent({
  name: 'FormRadioCheckSmall',
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
          h('path', {"d":"M12 12C12 14.762 9.762 17 7 17C4.238 17 2 14.762 2 12C2 9.238 4.238 7 7 7C9.762 7 12 9.238 12 12Z"}),
          h('path', {"d":"M5.25 12L6.418 13.168L8.75 10.832"}),
          h('path', {"d":"M16 12L21 12"})
        ]
      );
  }
});

export default FormRadioCheckSmall;
export { FormRadioCheckSmall };
