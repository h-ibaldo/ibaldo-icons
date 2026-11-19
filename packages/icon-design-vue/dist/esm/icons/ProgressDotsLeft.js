import { defineComponent, h } from 'vue';

const ProgressDotsLeft = defineComponent({
  name: 'ProgressDotsLeft',
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
          h('rect', {"x":"10.999999881978297","y":"10.998779328588739","width":"1.999999978605018","height":"1.999999921402834","rx":".999402546252582","ry":".999402546252582","transform":"translate(23.998778647996581 -.001221094512877) rotate(89.999997552637623)"}),
          h('rect', {"x":"18.999999947934185","y":"10.998779328521834","width":"1.99999997860499","height":"1.999999921536643","rx":".999402546192225","ry":".999402546192225","transform":"translate(31.998778375262539 -8.001221158653124) rotate(89.999997561307453)"}),
          h('rect', {"x":"1.999999898673892","y":"9.998779368843088","width":"3.999999957708923","height":"3.999999804551408","rx":"1.999997920799583","ry":"1.999997920799583","transform":"translate(15.998779090002927 7.998779217675681) rotate(89.999999159983446)"})
        ]
      );
  }
});

export default ProgressDotsLeft;
export { ProgressDotsLeft };
