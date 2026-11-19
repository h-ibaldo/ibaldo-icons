import { defineComponent, h } from 'vue';

const AdjustTick = defineComponent({
  name: 'AdjustTick',
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
          h('line', {"x1":"15.999999990303877","y1":"12.000000000667569","x2":"1.999999990620381","y2":"12.000000000170985"}),
          h('line', {"x1":"21.999999990619472","y1":"12.000000001068656","x2":"19.999999990303877","y2":"12.000000000937689"}),
          h('line', {"x1":"11.999999990303877","y1":"19.000000000578439","x2":"21.999999990297511","y2":"19.000000001068656"}),
          h('line', {"x1":"1.999999990303877","y1":"19.000000000170985","x2":"7.999999990303877","y2":"19.000000000308319"}),
          h('line', {"x1":"11.999999990303877","y1":"4.999999999948159","x2":"21.99999999092779","y2":"5.000000000439286"}),
          h('line', {"x1":"1.999999990933247","y1":"5.000000000170985","x2":"7.999999990303877","y2":"5.000000000308319"}),
          h('line', {"x1":"7.999999990303877","y1":"2.000000000439286","x2":"7.999999990303877","y2":"8.000000000439286"}),
          h('line', {"x1":"15.999999990303877","y1":"9.000000000439286","x2":"15.999999990303877","y2":"15.000000000439286"}),
          h('line', {"x1":"7.999999990303877","y1":"16.000000000439286","x2":"7.999999990303877","y2":"22.000000000439286"})
        ]
      );
  }
});

export default AdjustTick;
export { AdjustTick };
