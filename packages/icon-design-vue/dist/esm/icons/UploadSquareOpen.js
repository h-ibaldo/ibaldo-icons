import { defineComponent, h } from 'vue';

const UploadSquareOpen = defineComponent({
  name: 'UploadSquareOpen',
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
          h('path', {"d":"M16.97473145002914,9.000000000462023h2c1.656854249489697,0,3,1.343145750503936,3,3v6.999999999997272c0,1.656854249493335-1.343145750510303,3-3,3H4.97473145002914c-1.656854249489697,0-3-1.343145750506665-3-3v-6.999999999997272c0-1.656854249496064,1.343145750510303-3,3-3h2"}),
          h('polyline', {"points":"8.9747314502074 5.000000000191903 11.974731451149637 2.000000000462023 14.9747314502074 5.000000000730324"}),
          h('line', {"x1":"11.974731448501188","y1":"12.000000000462023","x2":"11.974731451149637","y2":"2.000000000462023"}),
          h('line', {"x1":"6.97473145002914","y1":"17.000000000462023","x2":"16.97473145002914","y2":"17.000000000462023"})
        ]
      );
  }
});

export default UploadSquareOpen;
export { UploadSquareOpen };
