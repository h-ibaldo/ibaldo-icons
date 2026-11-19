import { defineComponent, h } from 'vue';

const LinkDotsCircleBracket = defineComponent({
  name: 'LinkDotsCircleBracket',
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
          h('path', {"d":"M12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17Z"}),
          h('path', {"d":"M21.578 9C21.848 8.387 22 7.711 22 7C22 4.238 19.762 2 17 2L15 2"}),
          h('path', {"d":"M15.5 17L15.5 17"}),
          h('path', {"d":"M18.5 17L18.5 17"})
        ]
      );
  }
});

export default LinkDotsCircleBracket;
export { LinkDotsCircleBracket };
