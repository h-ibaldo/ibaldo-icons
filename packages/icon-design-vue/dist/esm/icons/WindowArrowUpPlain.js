import { defineComponent, h } from 'vue';

const WindowArrowUpPlain = defineComponent({
  name: 'WindowArrowUpPlain',
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
          h('path', {"d":"M6,18h-1c-1.656854249489697,0-3-1.343145750510303-3-3V5c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249489697,0,3,1.343145750506665,3,3v10c0,1.656854249489697-1.343145750510303,3-3,3h-1"}),
          h('line', {"x1":"2","y1":"8","x2":"22","y2":"8"}),
          h('polyline', {"points":"9 15 12 12 15 15"}),
          h('path', {"d":"M12,12v6c0,2.209138999322022-1.790861000679797,4-4,4h-1"})
        ]
      );
  }
});

export default WindowArrowUpPlain;
export { WindowArrowUpPlain };
