import { defineComponent, h } from 'vue';

const BellDash = defineComponent({
  name: 'BellDash',
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
          h('line', {"x1":"20.000000004471076","y1":"17.000000003885361","x2":"4.000000004471076","y2":"17.000000003885361"}),
          h('path', {"d":"M18.000000004471076,17.000000003885361v-8.000005999998393c0-3.313705185280014-2.686288814731597-5.999994000000697-5.999994000010702-5.999994000000697h-.000012000000424c-3.313705185280924,0-5.999993999988874,2.686288814720683-5.999993999988874,5.999994000000697v8.000005999998393"}),
          h('line', {"x1":"10.000000004471076","y1":"21.000000003885361","x2":"14.000000004471076","y2":"21.000000003885361"})
        ]
      );
  }
});

export default BellDash;
export { BellDash };
