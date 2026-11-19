import { defineComponent, h } from 'vue';

const LinkBrokenDoubleBracket = defineComponent({
  name: 'LinkBrokenDoubleBracket',
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
          h('path', {"d":"M9 16L6 16C3.789 16 2 14.211 2 12C2 9.789 3.789 8 6 8L9 8"}),
          h('path', {"d":"M15 16L18 16C20.211 16 22 14.211 22 12C22 9.789 20.211 8 18 8L15 8"}),
          h('path', {"d":"M8 2L9 4"}),
          h('path', {"d":"M16 2L15 4"}),
          h('path', {"d":"M8 22L9 20"}),
          h('path', {"d":"M16 22L15 20"})
        ]
      );
  }
});

export default LinkBrokenDoubleBracket;
export { LinkBrokenDoubleBracket };
