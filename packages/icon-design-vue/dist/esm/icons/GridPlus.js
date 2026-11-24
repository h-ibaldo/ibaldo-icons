import { defineComponent, h } from 'vue';

const GridPlus = defineComponent({
  name: 'GridPlus',
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
          h('path', {"d":"M14 18L22 18"}),
          h('path', {"d":"M18 14L18 22"}),
          h('path', {"d":"M3 2L9 2C9.551 2 10 2.449 10 3L10 9C10 9.551 9.551 10 9 10L3 10C2.449 10 2 9.551 2 9L2 3C2 2.449 2.449 2 3 2Z"}),
          h('path', {"d":"M15 2L21 2C21.551 2 22 2.449 22 3L22 9C22 9.551 21.551 10 21 10L15 10C14.449 10 14 9.551 14 9L14 3C14 2.449 14.449 2 15 2Z"}),
          h('path', {"d":"M3 14L9 14C9.551 14 10 14.449 10 15L10 21C10 21.551 9.551 22 9 22L3 22C2.449 22 2 21.551 2 21L2 15C2 14.449 2.449 14 3 14Z"})
        ]
      );
  }
});

export default GridPlus;
export { GridPlus };
