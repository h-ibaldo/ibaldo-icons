import { defineComponent, h } from 'vue';

const UploadSquareStackOpen2 = defineComponent({
  name: 'UploadSquareStackOpen2',
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
          h('path', {"d":"M14.974731450030959,19.000000000462023c1.656854249492426,0,3-1.343145750509393,3-3v-7c0-1.656854249496064-1.343145750507574-3-3-3H4.974731450030959c-1.656854249494245,0-3,1.343145750503936-3,3v7c0,1.656854249490607,1.343145750505755,3,3,3"}),
          h('path', {"d":"M5.974731450030959,6.000000000462023v-1c0-1.656854249496064,1.343145750505755-3,3-3h10c1.656854249492426,0,3,1.343145750503936,3,3v7c0,1.656854249490607-1.343145750511212,3-3,3l-1-.000000000002728"}),
          h('polyline', {"points":"12.974731450030959 14.000000000462023 9.974731449356113 11.000000000462023 6.974731450030959 14.000000000462023"}),
          h('line', {"x1":"9.974731451106891","y1":"22.000000000462933","x2":"9.974731449356113","y2":"11.000000000462023"})
        ]
      );
  }
});

export default UploadSquareStackOpen2;
export { UploadSquareStackOpen2 };
