import { defineComponent, h } from 'vue';

const HandThumbUpSleeve = defineComponent({
  name: 'HandThumbUpSleeve',
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
          h('line', {"x1":"7.000000005000402","y1":"10.000000003886271","x2":"7.000000005000402","y2":"22.000000003886271"}),
          h('path', {"d":"M20.000000005000402,10.000000003886271h-7.599975585941138l1.385375976571595-3.463562011717841c.141784667959655-.3543701171875.214599609369543-.7325439453125.214599609369543-1.114196777342841v-.422241210939319c0-1.656860351560681-1.343139648441138-3-3-3-.552307128909888,0-1,.447692871094659-1,1v.000183105469659c0,1.308536472497508-.355625740850883,2.592471872984788-1.028856070281108,3.714536319989747l-1.971143929718892,3.285280574540593H2.000000005000402v12h14.666666666680612c.807401700609262,0,1.535614730519228-.485475353276343,1.846153846139714-1.230769230767692l3.333333333328483-8c.548906418971455-1.317375405509665-.418997156848491-2.769230769232308-1.846153846148809-2.769230769232308Z"})
        ]
      );
  }
});

export default HandThumbUpSleeve;
export { HandThumbUpSleeve };
