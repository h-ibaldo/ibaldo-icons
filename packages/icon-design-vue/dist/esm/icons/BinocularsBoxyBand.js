import { defineComponent, h } from 'vue';

const BinocularsBoxyBand = defineComponent({
  name: 'BinocularsBoxyBand',
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
          h('polyline', {"points":"5.999988017680153 5.936828613277612 5.999988017680153 1.936828613277612 9.999988017680153 1.936828613277612 9.999988017680153 5.936828613277612"}),
          h('polyline', {"points":"13.999988017680153 5.936828613277612 13.999988017680153 1.936828613277612 17.999988017680153 1.936828613277612 17.999988017680153 5.936828613277612"}),
          h('line', {"x1":"1.999988017680153","y1":"17.936828613277612","x2":"9.999988017680153","y2":"17.936828613277612"}),
          h('line', {"x1":"13.999988017680153","y1":"17.936828613277612","x2":"21.999988017680153","y2":"17.936828613277612"}),
          h('path', {"d":"M19.999988017680153,10.936828613277612v-3c0-1.104569499659192-.895430500340808-2-2-2h-4v3h-4v-3h-4c-1.104569499661011,0-2,.895430500340808-2,2v3c-1.1044921875,0-2,.895446777340112-2,2v8c0,.552284749830505.447715250169495,1,1,1h6c.552284749830505,0,1-.447715250169495,1-1v-7h4v7c0,.552284749830505.447715250169495,1,1,1h6c.552284749830505,0,1-.447715250169495,1-1v-8c0-1.104553222659888-.895385742180224-2-2-2Z"})
        ]
      );
  }
});

export default BinocularsBoxyBand;
export { BinocularsBoxyBand };
