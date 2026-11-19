import { defineComponent, h } from 'vue';

const TouchSwipeDownTwoFingersGap = defineComponent({
  name: 'TouchSwipeDownTwoFingersGap',
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
          h('polyline', {"points":"20.974731433996567 18.998779300560273 17.974731433996567 21.998779300560273 14.974731433996567 18.998779300560273"}),
          h('line', {"x1":"17.974731433996567","y1":"13.998779300560273","x2":"17.974731433996567","y2":"21.998779300560273"}),
          h('path', {"d":"M13.974731433996567,5.998779300556635c0,2.209138999201969,1.790861000808945,4,4,4.000000000003638,2.20913899920015-.000000000003638,4-1.790861000801669,4-4,0-2.209138999201969-1.79086100079985-4.000000000003638-4-4-2.209138999191055-.000000000003638-4,1.790861000798031-4,3.999999999996362Z"}),
          h('polyline', {"points":"8.974731433996567 18.998779301098693 5.974731433996567 21.998779301098693 2.974731433996567 18.998779301098693"}),
          h('line', {"x1":"5.974731433996567","y1":"13.998779301098693","x2":"5.974731433996567","y2":"21.998779301098693"}),
          h('path', {"d":"M1.974731433996567,5.998779301098693c0,2.209138999198331,1.790861000808945,3.999999999996362,4,4,2.20913899920015-.000000000003638,4-1.790861000801669,4-4,0-2.209138999201969-1.79086100079985-4.000000000003638-4-4-2.209138999191055-.000000000003638-4,1.790861000798031-4,4Z"})
        ]
      );
  }
});

export default TouchSwipeDownTwoFingersGap;
export { TouchSwipeDownTwoFingersGap };
