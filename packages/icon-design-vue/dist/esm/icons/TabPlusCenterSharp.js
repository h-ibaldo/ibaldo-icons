import { defineComponent, h } from 'vue';

const TabPlusCenterSharp = defineComponent({
  name: 'TabPlusCenterSharp',
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
          h('polygon', {"points":"22.025268532079281 21.99877930112325 2.025268532079281 21.99877930112325 2.025268532079281 1.99877930112325 10.025268532079281 1.99877930112325 13.025268532079281 5.99877930112325 22.025268532079281 5.99877930112325 22.025268532079281 21.99877930112325"}),
          h('polyline', {"points":"15.025268532079281 1.99877930112325 22.025268532079281 1.99877930112325 22.025268532079281 5.99877930112325"}),
          h('line', {"x1":"12.025268532079281","y1":"9.99877930112325","x2":"12.025268532079281","y2":"16.99877930112325"}),
          h('line', {"x1":"15.525268532079281","y1":"13.49877930112325","x2":"8.525268532079281","y2":"13.49877930112325"})
        ]
      );
  }
});

export default TabPlusCenterSharp;
export { TabPlusCenterSharp };
