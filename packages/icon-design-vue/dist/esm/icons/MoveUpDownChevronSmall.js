import { defineComponent, h } from 'vue';

const MoveUpDownChevronSmall = defineComponent({
  name: 'MoveUpDownChevronSmall',
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
          h('line', {"x1":"19.000000004469257","y1":"12.000000003885361","x2":"5.000000004469257","y2":"12.000000003885361"}),
          h('line', {"x1":"19.000000004469257","y1":"8.000000003885361","x2":"5.000000004469257","y2":"8.000000003885361"}),
          h('polyline', {"points":"10.000000004469257 4.000000003883542 12.000000004469257 2.000000003886271 14.000000004469257 4.000000003883542"}),
          h('line', {"x1":"5.000000004469257","y1":"16.000000003885361","x2":"19.000000004469257","y2":"16.000000003885361"}),
          h('polyline', {"points":"13.999998272249286 20.000000696674761 12.000000350550181 21.999998618364771 10.000002428869266 20.000000696674761"})
        ]
      );
  }
});

export default MoveUpDownChevronSmall;
export { MoveUpDownChevronSmall };
