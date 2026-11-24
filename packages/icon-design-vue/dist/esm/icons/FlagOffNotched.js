import { defineComponent, h } from 'vue';

const FlagOffNotched = defineComponent({
  name: 'FlagOffNotched',
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
          h('path', {"d":"M19 22L6 2"}),
          h('path', {"d":"M17 14L20 14L14.883 9.086L20 3.969L11 4"}),
          h('path', {"d":"M13.797 14L4 14L4 4L7.301 4"}),
          h('path', {"d":"M4 14L4 21.898"})
        ]
      );
  }
});

export default FlagOffNotched;
export { FlagOffNotched };
