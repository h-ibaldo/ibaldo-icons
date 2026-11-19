import { defineComponent, h } from 'vue';

const LinkArrowUpCompact = defineComponent({
  name: 'LinkArrowUpCompact',
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
          h('path', {"d":"M15 17L7 9"}),
          h('path', {"d":"M12.949 7.949L10.449 5.449C8.516 3.516 5.383 3.516 3.449 5.449C1.516 7.383 1.516 10.516 3.449 12.449L5.949 14.949"}),
          h('path', {"d":"M9.051 18.051L11.551 20.551C13.484 22.484 16.617 22.484 18.551 20.551C20.484 18.617 20.484 15.484 18.551 13.551L16.051 11.051"}),
          h('path', {"d":"M22.004 4L20.004 2L18.004 4"}),
          h('path', {"d":"M20.004 9L20.004 2"})
        ]
      );
  }
});

export default LinkArrowUpCompact;
export { LinkArrowUpCompact };
