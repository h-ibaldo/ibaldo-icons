import { defineComponent, h } from 'vue';

const ImagePeaks = defineComponent({
  name: 'ImagePeaks',
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
          h('rect', {"x":"1.999999993269739","y":"2.998779299956368","width":"20","height":"18","rx":"1.000000000002239","ry":"1.000000000002239","transform":"translate(23.9999999860011 23.997558600451168) rotate(-180)"}),
          h('polyline', {"points":"17.999999993269739 20.998779300134629 7.999999993269739 10.998779299956368 1.999999993049641 16.998779299505259"}),
          h('circle', {"cx":"13.999999993269739","cy":"8.998779299956368","r":"2"}),
          h('polyline', {"points":"21.999999993269739 18.998779299956368 16.999999993269739 13.998779299956368 13.999999993269739 16.998779299956368"})
        ]
      );
  }
});

export default ImagePeaks;
export { ImagePeaks };
