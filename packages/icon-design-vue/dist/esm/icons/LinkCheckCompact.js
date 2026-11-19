import { defineComponent, h } from 'vue';

const LinkCheckCompact = defineComponent({
  name: 'LinkCheckCompact',
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
          h('path', {"d":"M7 15L15 7"}),
          h('path', {"d":"M9.051 5.949L11.551 3.449C13.484 1.516 16.617 1.516 18.551 3.449C20.484 5.383 20.484 8.516 18.551 10.449L16.051 12.949"}),
          h('path', {"d":"M12.949 16.051L10.449 18.551C8.516 20.484 5.383 20.484 3.449 18.551C1.516 16.617 1.516 13.484 3.449 11.551L5.949 9.051"}),
          h('path', {"d":"M16 20L18 22L22 18"})
        ]
      );
  }
});

export default LinkCheckCompact;
export { LinkCheckCompact };
