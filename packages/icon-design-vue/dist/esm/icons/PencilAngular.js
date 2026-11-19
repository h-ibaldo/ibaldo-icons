import { defineComponent, h } from 'vue';

const PencilAngular = defineComponent({
  name: 'PencilAngular',
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
          h('polygon', {"points":"22 6.085786445528356 18 2.085786445528356 2 18.085786445528356 2.00000000036016 22.085786445168196 6.00000000036016 22.085786445168196 22 6.085786445528356"}),
          h('line', {"x1":"14.99999999963984","y1":"5.085786445168196","x2":"19","y2":"9.085786445528356"})
        ]
      );
  }
});

export default PencilAngular;
export { PencilAngular };
