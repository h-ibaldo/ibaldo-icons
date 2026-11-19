import { defineComponent, h } from 'vue';

const Www = defineComponent({
  name: 'Www',
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
          h('path', {"d":"M2 8.008L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 8"}),
          h('path', {"d":"M2 8L22 8"}),
          h('path', {"d":"M2 12L2 16L2.5 17L4 15L5.5 17L6 16L6 12"}),
          h('path', {"d":"M10 12L10 16L10.5 17L12 15L13.5 17L14 16L14 12"}),
          h('path', {"d":"M18 12L18 16L18.5 17L20 15L21.5 17L22 16L22 12"}),
          h('path', {"d":"M2 21C2 21.551 2.449 22 3 22L21 22C21.551 22 22 21.551 22 21"})
        ]
      );
  }
});

export default Www;
export { Www };
