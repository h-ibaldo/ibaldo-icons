import { defineComponent, h } from 'vue';

const VoteChevronSquare = defineComponent({
  name: 'VoteChevronSquare',
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
          h('rect', {"x":"5.016630450972116","y":"2.000000000480213","width":"14","height":"20","rx":"2","ry":"2"}),
          h('polyline', {"points":"10.016630450974844 8.000000000480213 12.016630450974844 6.000000000480213 14.016630450974844 8.000000000480213"}),
          h('polyline', {"points":"14.016630451063975 16.000000000658474 12.016630450883895 18.000000000476575 10.016630451063975 16.000000000298314"}),
          h('line', {"x1":"5.016630450972116","y1":"12.000000000480213","x2":"19.016630450972116","y2":"12.000000000480213"})
        ]
      );
  }
});

export default VoteChevronSquare;
export { VoteChevronSquare };
