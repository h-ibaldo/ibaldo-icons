import { defineComponent, h } from 'vue';

const TabletMobile = defineComponent({
  name: 'TabletMobile',
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
          h('path', {"d":"M5 8L11 8C12.105 8 13 8.895 13 10L13 20C13 21.105 12.105 22 11 22L5 22C3.895 22 3 21.105 3 20L3 10C3 8.895 3.895 8 5 8Z"}),
          h('path', {"d":"M7 5L7 3C7 2.449 7.449 2 8 2L20 2C20.551 2 21 2.449 21 3L21 20C21 20.551 20.551 21 20 21L16 21"})
        ]
      );
  }
});

export default TabletMobile;
export { TabletMobile };
