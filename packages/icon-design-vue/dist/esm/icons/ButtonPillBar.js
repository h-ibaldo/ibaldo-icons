import { defineComponent, h } from 'vue';

const ButtonPillBar = defineComponent({
  name: 'ButtonPillBar',
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
          h('rect', {"x":"1.999999995185732","y":"6.999999997010121","width":"19.999999999999943","height":"10.000000007293295","rx":"4.99999501106799","ry":"4.99999501106799"}),
          h('line', {"x1":"6.999999990797733","y1":"11.000000000448381","x2":"16.999999990797733","y2":"11.000000000448381"})
        ]
      );
  }
});

export default ButtonPillBar;
export { ButtonPillBar };
