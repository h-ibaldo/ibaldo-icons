import { defineComponent, h } from 'vue';

const CircleGridMarks = defineComponent({
  name: 'CircleGridMarks',
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
          h('circle', {"cx":"5.97473144523974","cy":"17.999999999911324","r":"3.999999999999773"}),
          h('circle', {"cx":"17.97473144523974","cy":"18.000000000989075","r":"4.000000000000227"}),
          h('circle', {"cx":"17.97473144523974","cy":"6.000000000448836","r":"3.999999999999773"}),
          h('circle', {"cx":"5.97473144523974","cy":"6.000000000448836","r":"3.999999999999773"}),
          h('line', {"x1":"17.97473144523974","y1":"18.010000000988839","x2":"17.97473144523974","y2":"18.000000000988621"}),
          h('line', {"x1":"3.146304320180207","y1":"20.828427124340124","x2":"8.803158570300184","y2":"15.171572875481615"}),
          h('line', {"x1":"15.146304320430318","y1":"8.828427125131384","x2":"20.803158570050073","y2":"3.171572875765378"}),
          h('line', {"x1":"20.803158569789957","y1":"8.828427125386952","x2":"15.146304320680429","y2":"3.171572875513448"})
        ]
      );
  }
});

export default CircleGridMarks;
export { CircleGridMarks };
