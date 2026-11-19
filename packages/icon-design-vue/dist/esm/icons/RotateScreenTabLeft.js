import { defineComponent, h } from 'vue';

const RotateScreenTabLeft = defineComponent({
  name: 'RotateScreenTabLeft',
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
          h('rect', {"x":"1.974731413605696","y":"9.998779298541194","width":"20","height":"12","rx":"2","ry":"2"}),
          h('polyline', {"points":"14.974731413605696 5.998779298537556 18.974731413605696 5.998779298537556 18.974731413605696 1.998779298537556"}),
          h('path', {"d":"M18.895751921416377,5.998779298541194c-1.383911132810681-2.388916015625-3.961547851560681-4-6.921020507810681-4s-5.537109375,1.611083984375-6.921020507808862,4"}),
          h('polyline', {"points":"1.974731413605696 16.998779298537556 3.974731413605696 16.998779298541194 3.974731413605696 14.998779298541194 1.974731413605696 14.998779298537556"})
        ]
      );
  }
});

export default RotateScreenTabLeft;
export { RotateScreenTabLeft };
