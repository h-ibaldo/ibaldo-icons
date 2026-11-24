import { defineComponent, h } from 'vue';

const BellOffDash = defineComponent({
  name: 'BellOffDash',
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
          h('line', {"x1":"20.000000021749656","y1":"17.000000004136382","x2":"7.000000021749656","y2":"17.000000004136382"}),
          h('line', {"x1":"10.000000021749656","y1":"21.000000004136382","x2":"14.000000021749656","y2":"21.000000004136382"}),
          h('line', {"x1":"20.000000021749656","y1":"3.000000004136382","x2":"4.000000021749656","y2":"20.000000004136382"}),
          h('path', {"d":"M18.000000021749656,17.000000004136382v-8c0-1.098022460941138-.2998046875-2.123901367191138-.814819335930224-3.00927734375"}),
          h('path', {"d":"M14.608764670188975,3.603149418196153c-.789733886709655-.382446289059772-1.672424316409888-.603149414059772-2.608764648439319-.603149414059772-3.313720703108629,0-6,2.686279296879547-6,6v3.75"})
        ]
      );
  }
});

export default BellOffDash;
export { BellOffDash };
