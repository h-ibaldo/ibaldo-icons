import { defineComponent, h } from 'vue';

const NodesCircleFour = defineComponent({
  name: 'NodesCircleFour',
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
          h('circle', {"cx":"5","cy":"4.999999999998181","r":"2"}),
          h('circle', {"cx":"19","cy":"4.999999999998181","r":"2"}),
          h('circle', {"cx":"5","cy":"18.999999999998181","r":"2"}),
          h('circle', {"cx":"19","cy":"18.999999999998181","r":"2"}),
          h('path', {"d":"M6.4794921875,20.334960937498181c1.58251953125,1.05029296875,3.47900390625,1.6650390625,5.5205078125,1.6650390625s3.93798828125-.61474609375,5.5205078125-1.6650390625"}),
          h('path', {"d":"M3.6650390625,6.479492187498181c-1.05029296875,1.58251953125-1.6650390625,3.47900390625-1.6650390625,5.5205078125s.61474609375,3.93798828125,1.6650390625,5.5205078125"}),
          h('path', {"d":"M17.5205078125,3.665039062498181c-1.58251953125-1.05029296875-3.47900390625-1.6650390625-5.5205078125-1.6650390625s-3.93798828125.61474609375-5.5205078125,1.6650390625"}),
          h('path', {"d":"M20.3349609375,17.520507812498181c1.05029296875-1.58251953125,1.6650390625-3.47900390625,1.6650390625-5.5205078125s-.61474609375-3.93798828125-1.6650390625-5.5205078125"})
        ]
      );
  }
});

export default NodesCircleFour;
export { NodesCircleFour };
