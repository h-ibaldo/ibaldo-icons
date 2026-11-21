import { defineComponent, h } from 'vue';

const ReceiptEuroWavy = defineComponent({
  name: 'ReceiptEuroWavy',
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
          h('path', {"d":"M16.102 14C15.379 15.215 14.234 16 12.945 16C10.766 16 9 13.762 9 11C9 8.238 10.766 6 12.945 6C13.832 6 14.652 6.371 15.313 7"}),
          h('path', {"d":"M13 11L8 11"})
        ]
      );
  }
});

export default ReceiptEuroWavy;
export { ReceiptEuroWavy };
