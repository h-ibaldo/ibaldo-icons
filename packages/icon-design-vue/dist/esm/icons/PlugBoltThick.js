import { defineComponent, h } from 'vue';

const PlugBoltThick = defineComponent({
  name: 'PlugBoltThick',
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
          h('path', {"d":"M3 8L14 8C14.551 8 15 8.449 15 9L15 13C15 15.762 12.762 18 10 18L7 18C4.238 18 2 15.762 2 13L2 9C2 8.449 2.449 8 3 8Z"}),
          h('path', {"d":"M4 8L4 3.5C4 2.672 4.672 2 5.5 2C6.328 2 7 2.672 7 3.5L7 8"}),
          h('path', {"d":"M10 8L10 3.5C10 2.672 10.672 2 11.5 2C12.328 2 13 2.672 13 3.5L13 8"}),
          h('path', {"d":"M7 18L7 22"}),
          h('path', {"d":"M10 18L10 22"}),
          h('path', {"d":"M22 2L18 6L22 6L18 11"})
        ]
      );
  }
});

export default PlugBoltThick;
export { PlugBoltThick };
