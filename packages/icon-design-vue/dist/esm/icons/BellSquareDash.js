import { defineComponent, h } from 'vue';

const BellSquareDash = defineComponent({
  name: 'BellSquareDash',
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
          h('rect', {"x":"1.974731449505271","y":"2.000000000480213","width":"20","height":"20","rx":"5","ry":"5"}),
          h('path', {"d":"M15.974731449505271,12.000000000480213v-2.000003999979526c0-2.209136790203047-1.790859209821065-3.999996000020474-3.999996000020474-3.999996000020474h-.000007999991794c-2.209136790188495,0-3.999995999998646,1.790859209799237-3.999996000016836,3.999995999987732l-.000000000021828,2.000004000012268-.963533202520921,1.445299803770467c-.443036486478377.664554729719384.033354909890477,1.554700196229533.83205029434248,1.554700196229533h8.262965816407814c.798695384452003,0,1.275086780820857-.890145466510148.83205029434248-1.554700196229533l-.963533202520921-1.445299803770467Z"}),
          h('line', {"x1":"10.974731449505271","y1":"18.000000000480213","x2":"12.974731449505271","y2":"18.000000000480213"})
        ]
      );
  }
});

export default BellSquareDash;
export { BellSquareDash };
