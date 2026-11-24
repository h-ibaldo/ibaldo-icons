import { defineComponent, h } from 'vue';

const TriangleWide = defineComponent({
  name: 'TriangleWide',
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
          h('path', {"d":"M5.984525027919517,21.000000000479304h11.980412844241073c3.097200032168985,0,5.019342554738614-3.368455577625355,3.443706112859218-6.034917248503916l-5.990206422120536-10.137272406660486c-1.548247016329697-2.62011033532508-5.339165209388739-2.62011033532508-6.887412225720254,0L2.540818915069394,14.965082751975388c-1.575636441888491,2.666461670878562.346506080690233,6.034917248503916,3.443706112850123,6.034917248503916Z"})
        ]
      );
  }
});

export default TriangleWide;
export { TriangleWide };
