import { defineComponent, h } from 'vue';

const MailboxFlagSquare = defineComponent({
  name: 'MailboxFlagSquare',
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
          h('polyline', {"points":"16.945392090099631 11.999999999998181 16.945392090279711 2.999999999909051 21.945392090279711 2.999999999998181 21.945392090229689 6.999999999998181 16.945392090229689 6.999999999909051"}),
          h('path', {"d":"M6.445387592652829,7.000000000282796h.000008993869631c2.483615132292868,0,4.499995510304987,2.016380378012121,4.499995510304987,4.499995510304988v9.500004489410454H2.945392079048355c-.551915024157838,0-.999999999390917-.44808497523308-.999999999390917-.999999999390916v-8.500004487329136c0-2.483615133777741,2.01638037921765-4.49999551299539,4.499995512995391-4.49999551299539Z"}),
          h('path', {"d":"M10.945392090279711,20.999999999998181h10c.552284749830505,0,1-.447715250169495,1-1v-8.5c0-.52880859375-.10791015625-1.028686523439319-.275512695309772-1.5"}),
          h('line', {"x1":"13.945392090099631","y1":"6.999999999998181","x2":"6.445392090279711","y2":"6.999999999998181"}),
          h('line', {"x1":"4.945392090279711","y1":"16.999999999998181","x2":"7.945392090279711","y2":"16.999999999998181"})
        ]
      );
  }
});

export default MailboxFlagSquare;
export { MailboxFlagSquare };
