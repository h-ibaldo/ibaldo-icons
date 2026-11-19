import { defineComponent, h } from 'vue';

const ArrowSyncNodesDiagonal = defineComponent({
  name: 'ArrowSyncNodesDiagonal',
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
          h('polyline', {"points":"21.999999999690772 11.000000000178261 19.999999999508873 12.999999999998181 17.999999999690772 10.999999999818101"}),
          h('circle', {"cx":"7.99999999927968","cy":"4.999999999998181","r":"3"}),
          h('path', {"d":"M19.99999999927968,11.999999999998181c0-4.418212890630457-3.58172607421875-8-8-8-.393310546875,0-.777099609375.037109375-1.15521240234375.091796875"}),
          h('polyline', {"points":"1.999999999407009 12.999999999638021 3.999999999768988 10.999999999998181 5.999999999407009 13.000000000358341"}),
          h('circle', {"cx":"15.99999999927968","cy":"19.000000001077296","r":"2.999999999999773"}),
          h('path', {"d":"M3.999999999909051,11.999999999998181c-.00000000039654,4.418212890619543,3.58172607349843,8.000000000320142,7.99999999927968,8.00000000072032.393310546875.000000000030923.777099609378638-.037109374929059,1.155212402352845-.091796874899956"})
        ]
      );
  }
});

export default ArrowSyncNodesDiagonal;
export { ArrowSyncNodesDiagonal };
