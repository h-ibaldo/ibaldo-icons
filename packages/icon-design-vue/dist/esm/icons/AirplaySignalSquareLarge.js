import { defineComponent, h } from 'vue';

const AirplaySignalSquareLarge = defineComponent({
  name: 'AirplaySignalSquareLarge',
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
          h('path', {"d":"M11.21913116245014,14.976082576405133l-1.919375152510838,2.399218940641731c-.52381067576971.654763344711682-.057637399018859,1.624695047554269.780868809441017,1.624695047554269h3.838750305028952c.838506208459876,0,1.304679485210727-.969931702842587.780868809441017-1.624695047554269l-1.919375152510838-2.399218940641731c-.400325282609629-.500406603259762-1.161412336279682-.500406603259762-1.56173761888931,0Z"}),
          h('path', {"d":"M9.999999971889338,11.999996564601133c0-1.104569499599165.89543050040993-2,2-2,1.104569499600984,0,2,.895430500400835,2,2"}),
          h('path', {"d":"M17.022094698459114,15.277645490382383c.616455078121362-.942626953125.977905273430224-2.0672607421875.977905273430224-3.27764892578125,0-3.313720703125-2.686279296869543-6-6-6-3.313720703119543,0-6,2.686279296875-6,6,0,1.21038818359375.361450195319776,2.33502197265625.977905273441138,3.27764892578125"}),
          h('rect', {"x":"1.999999971889338","y":"1.999996564601133","width":"20","height":"20","rx":"2","ry":"2"})
        ]
      );
  }
});

export default AirplaySignalSquareLarge;
export { AirplaySignalSquareLarge };
