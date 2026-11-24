import { defineComponent, h } from 'vue';

const LinkXCircleBracket = defineComponent({
  name: 'LinkXCircleBracket',
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
          h('path', {"d":"M8 7L16 7"}),
          h('path', {"d":"M21.578 9C21.848 8.387 22 7.711 22 7C22 4.238 19.762 2 17 2L15 2"}),
          h('path', {"d":"M22 16.5C22 19.535 19.535 22 16.5 22C13.465 22 11 19.535 11 16.5C11 13.465 13.465 11 16.5 11C19.535 11 22 13.465 22 16.5Z"}),
          h('path', {"d":"M18 15L15 18"}),
          h('path', {"d":"M15 15L18 18"})
        ]
      );
  }
});

export default LinkXCircleBracket;
export { LinkXCircleBracket };
