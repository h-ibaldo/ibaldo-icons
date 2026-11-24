import { defineComponent, h } from 'vue';

const LinkBrokenDoubleApartCompact = defineComponent({
  name: 'LinkBrokenDoubleApartCompact',
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
          h('path', {"d":"M11 6L13.5 3.5C15.434 1.566 18.566 1.566 20.5 3.5C22.434 5.434 22.434 8.566 20.5 10.5L18 13"}),
          h('path', {"d":"M13 18L10.449 20.551C8.516 22.484 5.383 22.484 3.449 20.551C1.516 18.617 1.516 15.484 3.449 13.551L6 11"}),
          h('path', {"d":"M5 8L2 7"}),
          h('path', {"d":"M8 5L7 2"}),
          h('path', {"d":"M19 16L22 17"}),
          h('path', {"d":"M16 19L17 22"})
        ]
      );
  }
});

export default LinkBrokenDoubleApartCompact;
export { LinkBrokenDoubleApartCompact };
