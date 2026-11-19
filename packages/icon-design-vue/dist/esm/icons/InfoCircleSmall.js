import { defineComponent, h } from 'vue';

const InfoCircleSmall = defineComponent({
  name: 'InfoCircleSmall',
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
          h('circle', {"cx":"11.949462874325036","cy":"11.997562036765885","r":"8.000000000000455"}),
          h('line', {"x1":"11.949462874325036","y1":"8.987562036764757","x2":"11.949462874325036","y2":"8.997562036764975"}),
          h('line', {"x1":"11.949462874325036","y1":"14.997562036764975","x2":"11.949462874325036","y2":"11.997562036764975"})
        ]
      );
  }
});

export default InfoCircleSmall;
export { InfoCircleSmall };
