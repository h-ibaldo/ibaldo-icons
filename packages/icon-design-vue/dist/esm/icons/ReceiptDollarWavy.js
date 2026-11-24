import { defineComponent, h } from 'vue';

const ReceiptDollarWavy = defineComponent({
  name: 'ReceiptDollarWavy',
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
          h('path', {"d":"M4 22L6 20L8 22L10 20L12 22L14 20L16 22L18 20L20 22L20 2L4 2Z"}),
          h('path', {"d":"M14 7L11 7C9.895 7 9 7.895 9 9C9 10.105 9.895 11 11 11L13 11C14.105 11 15 11.895 15 13C15 14.105 14.105 15 13 15L10 15"}),
          h('path', {"d":"M12 5L12 7"}),
          h('path', {"d":"M12 15L12 17"})
        ]
      );
  }
});

export default ReceiptDollarWavy;
export { ReceiptDollarWavy };
