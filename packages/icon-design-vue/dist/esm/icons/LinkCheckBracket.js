import { defineComponent, h } from 'vue';

const LinkCheckBracket = defineComponent({
  name: 'LinkCheckBracket',
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
          h('path', {"d":"M9 14L7 14C4.238 14 2 11.762 2 9C2 6.238 4.238 4 7 4L9 4"}),
          h('path', {"d":"M15 4L17 4C19.762 4 22 6.238 22 9C22 11.762 19.762 14 17 14L15 14"}),
          h('path', {"d":"M8 9L16 9"}),
          h('path', {"d":"M16 20L18 22L22 18"})
        ]
      );
  }
});

export default LinkCheckBracket;
export { LinkCheckBracket };
