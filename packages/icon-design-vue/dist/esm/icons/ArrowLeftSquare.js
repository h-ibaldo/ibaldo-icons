import { defineComponent, h } from 'vue';

const ArrowLeftSquare = defineComponent({
  name: 'ArrowLeftSquare',
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
          h('polyline', {"points":"11.000000001078661 14.99999999877582 8.000000001609806 11.999999998237399 11.000000002148226 8.99999999877582"}),
          h('line', {"x1":"16.000000001609806","y1":"11.999999999674401","x2":"8.000000001609806","y2":"11.999999998237399"}),
          h('rect', {"x":"2.000000001614353","y":"1.999999999045031","width":"20","height":"20","rx":"1.999999999998408","ry":"1.999999999998408"})
        ]
      );
  }
});

export default ArrowLeftSquare;
export { ArrowLeftSquare };
