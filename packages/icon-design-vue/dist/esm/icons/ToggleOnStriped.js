import { defineComponent, h } from 'vue';

const ToggleOnStriped = defineComponent({
  name: 'ToggleOnStriped',
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
          h('rect', {"x":"1.999999988019965","y":"5.999996563894001","width":"19.999999999999886","height":"12.000000004577942","rx":"5.999993987784047","ry":"5.999993987784047","transform":"translate(23.999999973447217 23.999993134958544) rotate(-180)"}),
          h('path', {"d":"M15.999999977100742,17.999996563434252c-3.313708498801134,0-6-2.686291501198866-6-6,0-3.313708498797496,2.686291501198866-6,6-6"}),
          h('line', {"x1":"8.999999977100742","y1":"5.999996563434252","x2":"2.078063941939035","y2":"12.921932598590502"}),
          h('line', {"x1":"12.999999977100742","y1":"5.999996563434252","x2":"3.290222145069492","y2":"15.709774395465502"}),
          h('line', {"x1":"10.078063941939035","y1":"12.921932598590502","x2":"5.53424069976063","y2":"17.465755840778002"}),
          h('line', {"x1":"11.290222145069492","y1":"15.709774395465502","x2":"8.999999977100742","y2":"17.999996563434252"})
        ]
      );
  }
});

export default ToggleOnStriped;
export { ToggleOnStriped };
