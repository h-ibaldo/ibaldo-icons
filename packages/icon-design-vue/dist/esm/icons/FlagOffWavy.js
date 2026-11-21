import { defineComponent, h } from 'vue';

const FlagOffWavy = defineComponent({
  name: 'FlagOffWavy',
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
          h('path', {"d":"M18 22L6 2"}),
          h('path', {"d":"M4 4L4 22"}),
          h('path', {"d":"M4 16L6.113 14.973C7.379 14.359 8.859 14.371 10.113 15C11.293 15.59 12.668 15.645 13.883 15.148"}),
          h('path', {"d":"M17.066 14.645C17.52 14.73 17.961 14.891 18.375 15.117L20 16L20 6L18.07 5.012C16.824 4.375 15.352 4.371 14.102 5C13.254 5.426 12.305 5.566 11.387 5.422"}),
          h('path', {"d":"M7.535 4.559C7.016 4.617 6.504 4.766 6.023 5.004L4 6"})
        ]
      );
  }
});

export default FlagOffWavy;
export { FlagOffWavy };
