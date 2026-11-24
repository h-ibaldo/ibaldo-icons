import { defineComponent, h } from 'vue';

const ToggleOnInset = defineComponent({
  name: 'ToggleOnInset',
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
          h('rect', {"x":"2.000000211418751","y":"4.999996761721775","width":"20.000000000036607","height":"14.000000015773026","rx":"6.999992973722963","ry":"6.999992973722963","transform":"translate(24.000000402665158 23.999993559425533) rotate(-180)"}),
          h('circle', {"cx":"15.000000396670202","cy":"11.999996978796844","r":"3.000000000000227"})
        ]
      );
  }
});

export default ToggleOnInset;
export { ToggleOnInset };
