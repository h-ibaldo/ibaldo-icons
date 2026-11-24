import { defineComponent, h } from 'vue';

const DownloadSquareStackCorner = defineComponent({
  name: 'DownloadSquareStackCorner',
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
          h('rect', {"x":"2.974731450026411","y":"6.000000000462023","width":"14","height":"15.999999999997272","rx":"3","ry":"3"}),
          h('path', {"d":"M6.974731450026411,2.000000000462023h11c1.656854249493335,0,3,1.343145750503936,3,3v13"}),
          h('polyline', {"points":"12.974731450026411 15.000000000462023 9.974731449353385 18.000000000462023 6.974731450026411 15.000000000462023"}),
          h('line', {"x1":"9.974731451103253","y1":"10.000000000462023","x2":"9.974731449353385","y2":"18.000000000462023"})
        ]
      );
  }
});

export default DownloadSquareStackCorner;
export { DownloadSquareStackCorner };
