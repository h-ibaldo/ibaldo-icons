import { defineComponent, h } from 'vue';

const LinkPlusBracket = defineComponent({
  name: 'LinkPlusBracket',
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
          h('path', {"d":"M9 12L7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2L9 2"}),
          h('path', {"d":"M15 2L17 2C19.762 2 22 4.238 22 7C22 9.762 19.762 12 17 12L15 12"}),
          h('path', {"d":"M8 7L16 7"}),
          h('path', {"d":"M19 16L19 22"}),
          h('path', {"d":"M22 19L16 19"})
        ]
      );
  }
});

export default LinkPlusBracket;
export { LinkPlusBracket };
