import { defineComponent, h } from 'vue';

const BanknoteStack = defineComponent({
  name: 'BanknoteStack',
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
          h('path', {"d":"M2 17L19 17L19 4L2 4Z"}),
          h('path', {"d":"M22 7L22 20L5 20"}),
          h('path', {"d":"M2 8C4.211 8 6 6.211 6 4"}),
          h('path', {"d":"M15 4C15 6.211 16.789 8 19 8"}),
          h('path', {"d":"M19 13C16.789 13 15 14.789 15 17"}),
          h('path', {"d":"M6 17C6 14.789 4.211 13 2 13"}),
          h('path', {"d":"M13 10.5C13 11.883 11.883 13 10.5 13C9.117 13 8 11.883 8 10.5C8 9.117 9.117 8 10.5 8C11.883 8 13 9.117 13 10.5Z"})
        ]
      );
  }
});

export default BanknoteStack;
export { BanknoteStack };
