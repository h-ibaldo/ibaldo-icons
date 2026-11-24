import { defineComponent, h } from 'vue';

const ArrowSyncClockwiseDottedRotated = defineComponent({
  name: 'ArrowSyncClockwiseDottedRotated',
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
          h('path', {"d":"M20 12L20 12"}),
          h('path', {"d":"M20 12L20 12"}),
          h('path', {"d":"M19.191 8.492L19.191 8.492"}),
          h('path', {"d":"M16.926 5.695L16.926 5.695"}),
          h('path', {"d":"M19.309 15.254L19.309 15.254"}),
          h('path', {"d":"M13 22L11 20L13 18"}),
          h('path', {"d":"M12 20C15.262 20 18.059 18.047 19.305 15.25"}),
          h('path', {"d":"M4 12L4 12"}),
          h('path', {"d":"M4 12L4 12"}),
          h('path', {"d":"M4.809 15.508L4.809 15.508"}),
          h('path', {"d":"M7.074 18.305L7.074 18.305"}),
          h('path', {"d":"M4.691 8.746L4.691 8.746"}),
          h('path', {"d":"M11 2L13 4L11 6"}),
          h('path', {"d":"M12 4C8.738 4 5.941 5.953 4.695 8.75"})
        ]
      );
  }
});

export default ArrowSyncClockwiseDottedRotated;
export { ArrowSyncClockwiseDottedRotated };
