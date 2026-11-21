import { defineComponent, h } from 'vue';

const BanknoteDots = defineComponent({
  name: 'BanknoteDots',
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
          h('path', {"d":"M2 6L22 6L22 18L2 18Z"}),
          h('path', {"d":"M10 12C10 10.344 10.895 9 12 9C13.105 9 14 10.344 14 12C14 13.656 13.105 15 12 15C10.895 15 10 13.656 10 12Z"}),
          h('path', {"d":"M5 12C5 11.449 5.449 11 6 11C6.551 11 7 11.449 7 12C7 12.551 6.551 13 6 13C5.449 13 5 12.551 5 12Z"}),
          h('path', {"d":"M17 12C17 11.449 17.449 11 18 11C18.551 11 19 11.449 19 12C19 12.551 18.551 13 18 13C17.449 13 17 12.551 17 12Z"})
        ]
      );
  }
});

export default BanknoteDots;
export { BanknoteDots };
