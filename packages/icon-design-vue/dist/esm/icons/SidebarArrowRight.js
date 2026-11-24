import { defineComponent, h } from 'vue';

const SidebarArrowRight = defineComponent({
  name: 'SidebarArrowRight',
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
          h('line', {"x1":"17.050502324515037","y1":"6.99756203627021","x2":"19.050687067227045","y2":"6.99756203591005"}),
          h('line', {"x1":"17.050502324686022","y1":"9.99756203627021","x2":"19.050687067385297","y2":"9.99756203591005"}),
          h('line', {"x1":"17.050502324846093","y1":"12.99756203627021","x2":"19.050687067545368","y2":"12.99756203591005"}),
          h('rect', {"x":"2.050537047700345","y":"2.997627984182145","width":"20","height":"17.999993765783074","rx":"1.999999999999558","ry":"1.999999999999558"}),
          h('line', {"x1":"14.05053704693637","y1":"2.997627983887469","x2":"14.05053704846614","y2":"20.997621749672362"}),
          h('line', {"x1":"2.050502320205851","y1":"11.997562037932767","x2":"10.050502320205851","y2":"11.997562037303396"}),
          h('polyline', {"points":"7.050502319936641 8.997562037572607 10.050502320205851 11.997562037303396 7.05050232047688 14.997562037572607"})
        ]
      );
  }
});

export default SidebarArrowRight;
export { SidebarArrowRight };
