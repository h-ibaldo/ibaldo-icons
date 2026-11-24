import { defineComponent, h } from 'vue';

const MenuPills = defineComponent({
  name: 'MenuPills',
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
          h('rect', {"x":"2","y":"2.000000076632091","width":"20","height":"3.999999993410484","rx":"1.999998018237277","ry":"1.999998018237277"}),
          h('rect', {"x":"2","y":"10.000000075584353","width":"20","height":"3.999999995505959","rx":"1.999998032602977","ry":"1.999998032602977"}),
          h('rect', {"x":"2","y":"18.000000081987196","width":"20","height":"3.999999982700274","rx":"1.999998009715652","ry":"1.999998009715652"})
        ]
      );
  }
});

export default MenuPills;
export { MenuPills };
