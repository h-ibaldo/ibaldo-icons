import { defineComponent, h } from 'vue';

const ToggleMiddleSlim = defineComponent({
  name: 'ToggleMiddleSlim',
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
          h('rect', {"x":"1.999999987987565","y":"7.999996572550543","width":"20.000000000032401","height":"7.999999985558645","rx":"3.999995997897817","ry":"3.999995997897817"}),
          h('path', {"d":"M11.999999557170668,15.999996564460162c-2.209136785710143.00000000199725-3.999995992900949-1.79085920372745-3.99999599270086-3.999995989430317v-.000008023846021c.000000000200089-2.209136785695591,1.790859207700123-3.99999599110015,3.999995993399352-3.999995988713636"}),
          h('path', {"d":"M12.000003565179213,7.999996562470187c2.209136785701048-.000000002000888,3.999995992890035,1.79085920372745,3.999995992689946,3.999995989430317v.000008023842383c-.000000000200089,2.209136785699229-1.790859207700123,3.999995991103788-3.999995993399352,3.999995988713636"})
        ]
      );
  }
});

export default ToggleMiddleSlim;
export { ToggleMiddleSlim };
