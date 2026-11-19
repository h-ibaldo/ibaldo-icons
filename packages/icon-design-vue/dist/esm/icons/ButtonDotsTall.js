import { defineComponent, h } from 'vue';

const ButtonDotsTall = defineComponent({
  name: 'ButtonDotsTall',
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
          h('rect', {"x":"1.999999990799552","y":"7.000000000448381","width":"20","height":"10","rx":"2","ry":"2"}),
          h('line', {"x1":"7.999999990799552","y1":"12.010000000450418","x2":"7.999999990799552","y2":"12.0000000004502"}),
          h('line', {"x1":"11.999999990799552","y1":"12.010000000450418","x2":"11.999999990799552","y2":"12.0000000004502"}),
          h('line', {"x1":"15.999999990799552","y1":"12.010000000450418","x2":"15.999999990799552","y2":"12.0000000004502"})
        ]
      );
  }
});

export default ButtonDotsTall;
export { ButtonDotsTall };
