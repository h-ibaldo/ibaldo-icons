import { defineComponent, h } from 'vue';

const DotsVerticalHollow = defineComponent({
  name: 'DotsVerticalHollow',
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
          h('rect', {"x":"10.000000070991291","y":"10.00000003806643","width":"3.999999985321212","height":"3.999999846323506","rx":"1.998805100324319","ry":"1.998805100324319"}),
          h('rect', {"x":"10.000000070991064","y":"2.000000153619281","width":"3.999999985320757","height":"3.999999846337804","rx":"1.998805100337743","ry":"1.998805100337743"}),
          h('rect', {"x":"10.00000007099095","y":"17.999999999999872","width":"3.999999985320985","height":"3.999999846343858","rx":"1.99880510943995","ry":"1.99880510943995"})
        ]
      );
  }
});

export default DotsVerticalHollow;
export { DotsVerticalHollow };
