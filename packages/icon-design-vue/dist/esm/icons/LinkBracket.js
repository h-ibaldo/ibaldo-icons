import { defineComponent, h } from 'vue';

const LinkBracket = defineComponent({
  name: 'LinkBracket',
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
          h('path', {"d":"M9 17L7 17C4.238 17 2 14.762 2 12C2 9.238 4.238 7 7 7L9 7"}),
          h('path', {"d":"M15 7L17 7C19.762 7 22 9.238 22 12C22 14.762 19.762 17 17 17L15 17"}),
          h('path', {"d":"M8 12L16 12"})
        ]
      );
  }
});

export default LinkBracket;
export { LinkBracket };
