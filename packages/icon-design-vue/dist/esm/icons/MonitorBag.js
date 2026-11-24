import { defineComponent, h } from 'vue';

const MonitorBag = defineComponent({
  name: 'MonitorBag',
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
          h('rect', {"x":"1.999999993642632","y":"2.998779300212846","width":"20","height":"14","rx":"2","ry":"2"}),
          h('line', {"x1":"5.999999993642632","y1":"20.998779300212846","x2":"17.999999993642632","y2":"20.998779300212846"}),
          h('line', {"x1":"11.999999993642632","y1":"16.998779300212846","x2":"11.999999993642632","y2":"20.998779300212846"}),
          h('rect', {"x":"6.999999993642632","y":"8.998779300212846","width":"10","height":"5.000000000003638","rx":".912870929176279","ry":".912870929176279"}),
          h('path', {"d":"M13.999999993642632,8.998779300212846v-1.000002000000677c0-1.10456839509061-.895429604910532-1.999997999999323-1.999998000002051-1.999997999999323h-.000003999998626c-1.104568395088791,0-1.999997999999323.895429604908713-1.999997999999323,1.999997999999323v1.000002000000677"})
        ]
      );
  }
});

export default MonitorBag;
export { MonitorBag };
