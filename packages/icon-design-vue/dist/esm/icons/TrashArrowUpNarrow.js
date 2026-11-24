import { defineComponent, h } from 'vue';

const TrashArrowUpNarrow = defineComponent({
  name: 'TrashArrowUpNarrow',
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
          h('path', {"d":"M17.97473145010008,6.000000000462023v13.999999999997272c0,1.104569499661011-.895430500339899,2-2,2H7.97473145010008c-1.104569499670106,0-2-.895430500338989-2-2V6.000000000462023"}),
          h('line', {"x1":"3.97473145010008","y1":"6.000000000462023","x2":"19.97473145010008","y2":"6.000000000462023"}),
          h('path', {"d":"M14.97473145010008,6.000000000462023v-2.35392100772242c0-.909104324453438-.736974667830509-1.646078992280309-1.646078992280309-1.646078992280309h-2.707842015450296c-.9091043244498,0-1.646078992269395.736974667826871-1.646078992269395,1.646078992280309v2.35392100772242"}),
          h('polyline', {"points":"9.97473145010008 13.000000000459295 11.974731450090076 11.000000000459295 13.97473145010008 13.000000000459295"}),
          h('line', {"x1":"11.974731450090076","y1":"17.000000000459295","x2":"11.974731450090076","y2":"11.000000000459295"})
        ]
      );
  }
});

export default TrashArrowUpNarrow;
export { TrashArrowUpNarrow };
