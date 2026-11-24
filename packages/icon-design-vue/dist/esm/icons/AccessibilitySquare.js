import { defineComponent, h } from 'vue';

const AccessibilitySquare = defineComponent({
  name: 'AccessibilitySquare',
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
          h('rect', {"x":"1.999999998670319","y":"1.998782736206522","width":"20","height":"20.000000000002728","rx":"1.999999999999727","ry":"1.999999999999727"}),
          h('circle', {"cx":"11.999999998670319","cy":"7.499391368103716","r":"1.500608631892192"}),
          h('polyline', {"points":"6.999999998670319 9.998782736161957 9.999999998670319 10.998782736161957 13.999999998670319 10.998782736161957 16.999999998670319 9.998782736161957"}),
          h('polyline', {"points":"9.999999998670319 10.998782736161957 9.999999998670319 14.998782736161957 7.999999998670319 17.99878273620925"}),
          h('polyline', {"points":"13.999999998310159 10.99878273620925 13.999999998490239 14.99878273620925 15.999999998670319 17.998782736161957"}),
          h('line', {"x1":"9.999999998670319","y1":"14.998782736161957","x2":"13.999999998670319","y2":"14.998782736161957"})
        ]
      );
  }
});

export default AccessibilitySquare;
export { AccessibilitySquare };
