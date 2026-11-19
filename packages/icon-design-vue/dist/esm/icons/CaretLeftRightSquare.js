import { defineComponent, h } from 'vue';

const CaretLeftRightSquare = defineComponent({
  name: 'CaretLeftRightSquare',
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
          h('rect', {"x":"2.050537039341634","y":"2.99756204273308","width":"20","height":"18.000000000400178","rx":"1.999999999994095","ry":"1.999999999994095","transform":"translate(24.101074078167692 23.995124086384191) rotate(-180)"}),
          h('polygon', {"points":"10.050537043445729 15.997562036226554 6.050537043445729 11.997562036226554 10.050537043445729 7.997562036226554 10.050537043445729 15.997562036226554"}),
          h('polygon', {"points":"14.050537043576696 15.997562036292038 18.050537043445729 11.997562036157433 14.050537043305667 7.997562036292038 14.050537043576696 15.997562036292038"})
        ]
      );
  }
});

export default CaretLeftRightSquare;
export { CaretLeftRightSquare };
