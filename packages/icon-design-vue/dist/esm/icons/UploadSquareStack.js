import { defineComponent, h } from 'vue';

const UploadSquareStack = defineComponent({
  name: 'UploadSquareStack',
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
          h('rect', {"x":"1.974731450026411","y":"2.000000000462023","width":"14","height":"15","rx":"3","ry":"3"}),
          h('path', {"d":"M7.974731450026411,17.000000000462023v2c0,1.656854249490607,1.343145750505755,3.000000000000909,3,3.000000000000909h8c1.656854249493335,0,3-1.343145750510303,3-3.000000000000909v-9c0-1.656854249496064-1.343145750509393-3-3-3h-3"}),
          h('polyline', {"points":"11.974731450113723 9.000000000456566 8.974731449440696 6.000000000456566 5.974731450113723 9.000000000456566"}),
          h('line', {"x1":"8.974731451190564","y1":"13.000000000456566","x2":"8.974731449440696","y2":"6.000000000456566"})
        ]
      );
  }
});

export default UploadSquareStack;
export { UploadSquareStack };
