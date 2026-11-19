import { defineComponent, h } from 'vue';

const XUndoWide = defineComponent({
  name: 'XUndoWide',
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
          h('line', {"x1":"1.999999990799552","y1":"15.000000000446562","x2":"11.999999990799552","y2":"5.000000000446562"}),
          h('line', {"x1":"11.999999990799552","y1":"15.000000000446562","x2":"1.999999990799552","y2":"5.000000000446562"}),
          h('polyline', {"points":"16.999999990799552 13.000000000446562 13.999999990799552 10.000000000446562 16.999999990799552 7.000000000446562"}),
          h('path', {"d":"M12.999999990799552,20.000000000446562h4.000004999281373c2.761420987728343.000000000001819,4.999994999998307-2.238574012266326,4.999994999998307-4.99999499999376v-.000010000000657c0-2.761420987720157-2.238574012259051-4.999994999987393-4.999994999980117-4.999994999998307l-2.000005000019883-.000000000007276"})
        ]
      );
  }
});

export default XUndoWide;
export { XUndoWide };
