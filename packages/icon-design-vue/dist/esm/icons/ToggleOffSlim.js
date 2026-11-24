import { defineComponent, h } from 'vue';

const ToggleOffSlim = defineComponent({
  name: 'ToggleOffSlim',
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
          h('rect', {"x":"1.999999541142813","y":"7.999996567572637","width":"20.000000000048772","height":"7.999999995611319","rx":"3.999996003883115","ry":"3.999996003883115","transform":"translate(23.999999089554446 23.999993123536541) rotate(180)"}),
          h('path', {"d":"M5.999999977100742,7.999996561935404c2.209136785699229-.000000002197339,3.999995993048287,1.790859203370928,3.999995993048287,3.999995989073795v.000008023842383c0,2.209136785699229-1.790859207339963,3.999995991263859-3.999995993039192,3.999995989073795"})
        ]
      );
  }
});

export default ToggleOffSlim;
export { ToggleOffSlim };
