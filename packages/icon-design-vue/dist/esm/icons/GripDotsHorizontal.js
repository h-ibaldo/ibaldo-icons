import { defineComponent, h } from 'vue';

const GripDotsHorizontal = defineComponent({
  name: 'GripDotsHorizontal',
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
          h('rect', {"x":"2.025268547038195","y":"5.998782721722748","width":"4.000000022223503","height":"4.000000014685753","rx":"1.999998008401924","ry":"1.999998008401924"}),
          h('rect', {"x":"10.025268555652929","y":"5.998782721722748","width":"4.000000004994035","height":"4.000000014685753","rx":"1.999997999787305","ry":"1.999997999787305"}),
          h('rect', {"x":"18.025268564267662","y":"5.998782721722748","width":"3.999999987764568","height":"4.000000014685753","rx":"1.999997991172459","ry":"1.999997991172459"}),
          h('rect', {"x":"2.025268547038195","y":"13.998782721140657","width":"4.000000022223503","height":"4.000000015849935","rx":"1.999998015968912","ry":"1.999998015968912"}),
          h('rect', {"x":"10.025268555652929","y":"13.998782721140657","width":"4.000000004994035","height":"4.000000015849935","rx":"1.99999800735418","ry":"1.99999800735418"}),
          h('rect', {"x":"18.025268564267662","y":"13.998782721140657","width":"3.999999987764568","height":"4.000000015849935","rx":"1.999997998739447","ry":"1.999997998739447"})
        ]
      );
  }
});

export default GripDotsHorizontal;
export { GripDotsHorizontal };
