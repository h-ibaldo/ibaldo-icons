import { defineComponent, h } from 'vue';

const MobileCube = defineComponent({
  name: 'MobileCube',
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
          h('rect', {"x":"2.999999977619154","y":"1.999996563117747","width":"18","height":"20","rx":"1.999999999998434","ry":"1.999999999998434"}),
          h('polygon', {"points":"11.999999977490006 12.999996563117747 16.999999977890184 9.999996563787136 11.999999978299456 6.999996563117747 6.999999977890184 9.999996562444721 11.999999977490006 12.999996563117747"}),
          h('polyline', {"points":"6.999999977890184 9.999996562444721 6.999999977258994 14.999996562444721 11.999999976860636 17.999996563117747 16.999999977258994 14.999996563787136 16.999999977890184 9.999996563787136"}),
          h('line', {"x1":"11.999999977490006","y1":"12.999996563117747","x2":"11.999999976860636","y2":"17.999996563117747"}),
          h('polyline', {"points":"8.999999979039785 1.999996561859007 8.999999978950655 2.999996561859007 14.999999978950655 2.999996562401066 14.999999979039785 1.999996562401066"})
        ]
      );
  }
});

export default MobileCube;
export { MobileCube };
