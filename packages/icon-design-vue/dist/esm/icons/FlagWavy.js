import { defineComponent, h } from 'vue';

const FlagWavy = defineComponent({
  name: 'FlagWavy',
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
          h('path', {"d":"M4 2L4 22"}),
          h('path', {"d":"M4 14L6.113 12.973C7.379 12.359 8.859 12.371 10.113 13C11.375 13.633 12.852 13.648 14.125 13.043L14.219 13C15.543 12.371 17.086 12.414 18.375 13.117L20 14L20 4L18.07 3.012C16.824 2.375 15.352 2.371 14.102 3C12.852 3.629 11.375 3.637 10.117 3.016L10.082 3C8.801 2.371 7.301 2.371 6.023 3.004L4 4"})
        ]
      );
  }
});

export default FlagWavy;
export { FlagWavy };
