import { defineComponent, h } from 'vue';

const CreditCardSignal = defineComponent({
  name: 'CreditCardSignal',
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
          h('path', {"d":"M4 5L13 5C14.105 5 15 5.895 15 7L15 14C15 15.105 14.105 16 13 16L4 16C2.895 16 2 15.105 2 14L2 7C2 5.895 2.895 5 4 5Z"}),
          h('path', {"d":"M2 9L15 9"}),
          h('path', {"d":"M21 2L11.945 2L11.945 5"}),
          h('path', {"d":"M21 22L11.945 22L11.945 16"}),
          h('path', {"d":"M18 8C19.105 9.105 19.105 10.895 18 12"}),
          h('path', {"d":"M20 5.172C22.668 7.84 22.668 12.16 20 14.828"})
        ]
      );
  }
});

export default CreditCardSignal;
export { CreditCardSignal };
