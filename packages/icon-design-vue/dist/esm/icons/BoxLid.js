import { defineComponent, h } from 'vue';

const BoxLid = defineComponent({
  name: 'BoxLid',
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
          h('rect', {"x":"2","y":"2.999999999998181","width":"20","height":"5","rx":"1","ry":"1"}),
          h('path', {"d":"M21,7.999999999998181v12c0,.552284749830505-.503679656439999,1-1.125,1H4.125c-.621320343560001,0-1.125-.447715250169495-1.125-1V7.999999999998181"}),
          h('line', {"x1":"9","y1":"12.999999999998181","x2":"15","y2":"12.999999999998181"})
        ]
      );
  }
});

export default BoxLid;
export { BoxLid };
