import { defineComponent, h } from 'vue';

const SwitchDialOn = defineComponent({
  name: 'SwitchDialOn',
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
          h('circle', {"cx":"11.974731413636164","cy":"15.998779298523914","r":"6.000000000000682"}),
          h('line', {"x1":"16.217372100765715","y1":"11.756138611421193","x2":"12.681838194845113","y2":"15.291672517352708"}),
          h('rect', {"x":"1.974738038148786","y":"1.9987792977455","width":"4.000000003485354","height":"5.999999999998408","rx":"1.999998005051629","ry":"1.999998005051629"}),
          h('line', {"x1":"19.974731413605696","y1":"1.998779298537556","x2":"19.974731413605696","y2":"7.998779298537556"})
        ]
      );
  }
});

export default SwitchDialOn;
export { SwitchDialOn };
