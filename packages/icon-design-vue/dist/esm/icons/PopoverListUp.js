import { defineComponent, h } from 'vue';

const PopoverListUp = defineComponent({
  name: 'PopoverListUp',
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
          h('path', {"d":"M19,4h-5.000000238899702l-1.999999761100298-2-1.999999761090294,2h-5.000000238909706c-1.104569499660101,0-2,.895430500338989-2,2v14c0,1.104569499661011.895430500339899,2,2,2h14c1.104569499670106,0,2-.895430500338989,2-2V6c0-1.104569499661011-.895430500329894-2-2-2Z"}),
          h('line', {"x1":"8.060537104500327","y1":"16.997565477289754","x2":"8.050537104500108","y2":"16.997565477289754"}),
          h('line', {"x1":"8.060537104500327","y1":"12.997565477289754","x2":"8.050537104500108","y2":"12.997565477289754"}),
          h('line', {"x1":"8.060537104500327","y1":"8.997565477289754","x2":"8.050537104500108","y2":"8.997565477289754"}),
          h('line', {"x1":"12","y1":"17","x2":"16","y2":"17"}),
          h('line', {"x1":"12","y1":"13","x2":"16","y2":"13"}),
          h('line', {"x1":"12","y1":"9","x2":"16","y2":"9"})
        ]
      );
  }
});

export default PopoverListUp;
export { PopoverListUp };
