import { defineComponent, h } from 'vue';

const LayoutPanelLeft = defineComponent({
  name: 'LayoutPanelLeft',
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
          h('path', {"d":"M9 22L3 22C2.449 22 2 21.551 2 21L2 3C2 2.449 2.449 2 3 2L9 2C9.551 2 10 2.449 10 3L10 21C10 21.551 9.551 22 9 22Z"}),
          h('path', {"d":"M21 22L15 22C14.449 22 14 21.551 14 21L14 15C14 14.449 14.449 14 15 14L21 14C21.551 14 22 14.449 22 15L22 21C22 21.551 21.551 22 21 22Z"}),
          h('path', {"d":"M21 10L15 10C14.449 10 14 9.551 14 9L14 3C14 2.449 14.449 2 15 2L21 2C21.551 2 22 2.449 22 3L22 9C22 9.551 21.551 10 21 10Z"})
        ]
      );
  }
});

export default LayoutPanelLeft;
export { LayoutPanelLeft };
