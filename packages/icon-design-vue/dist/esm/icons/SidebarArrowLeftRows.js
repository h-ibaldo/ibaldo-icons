import { defineComponent, h } from 'vue';

const SidebarArrowLeftRows = defineComponent({
  name: 'SidebarArrowLeftRows',
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
          h('line', {"x1":"8.000000003413334","y1":"16.000000004040885","x2":"2.000000003413334","y2":"16.000000003501555"}),
          h('line', {"x1":"8.000000003772584","y1":"12.000000004040885","x2":"2.000000003772584","y2":"12.000000003501555"}),
          h('line', {"x1":"8.000000004131834","y1":"8.000000004040885","x2":"2.000000004131834","y2":"8.000000003501555"}),
          h('rect', {"x":"2.000000003772584","y":"4.000000004400135","width":"20","height":"16","rx":"1.999999999999394","ry":"1.999999999999394","transform":"translate(24.000000006467417 24.000000009878022) rotate(-180)"}),
          h('line', {"x1":"8.000000003054083","y1":"20.000000004040885","x2":"8.000000004491085","y2":"4.000000004040885"}),
          h('line', {"x1":"18.000000003772584","y1":"12.000000004938556","x2":"12.000000003772584","y2":"12.000000004400135"}),
          h('polyline', {"points":"15.000000003503374 15.000000004669346 12.000000003772584 12.000000004400135 15.000000004041794 9.000000004669346"})
        ]
      );
  }
});

export default SidebarArrowLeftRows;
export { SidebarArrowLeftRows };
