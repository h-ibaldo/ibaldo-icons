import { defineComponent, h } from 'vue';

const LinkBrokenBracket = defineComponent({
  name: 'LinkBrokenBracket',
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
          h('path', {"d":"M10.805 17.656L8.684 19.777C7.121 21.34 4.586 21.34 3.023 19.777C1.465 18.215 1.465 15.684 3.023 14.121L5.145 12"}),
          h('path', {"d":"M15 8L18 8C20.211 8 22 9.789 22 12C22 14.211 20.211 16 18 16L15 16"}),
          h('path', {"d":"M3.07 7.336L4.957 8"}),
          h('path', {"d":"M12 3.063L11.336 4.949"}),
          h('path', {"d":"M6.473 2.977L7.336 4.781"})
        ]
      );
  }
});

export default LinkBrokenBracket;
export { LinkBrokenBracket };
