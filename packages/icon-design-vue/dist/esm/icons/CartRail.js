import { defineComponent, h } from 'vue';

const CartRail = defineComponent({
  name: 'CartRail',
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
          h('path', {"d":"M2 2L4.492 2.832C4.809 2.938 5.055 3.195 5.141 3.516L8 14L19 14L21 5L6 5"}),
          h('path', {"d":"M19 18L8 18C6.895 18 6 17.105 6 16C6 14.895 6.895 14 8 14"}),
          h('path', {"d":"M20 21.5C20 21.773 19.773 22 19.5 22C19.227 22 19 21.773 19 21.5C19 21.227 19.227 21 19.5 21C19.773 21 20 21.227 20 21.5Z"}),
          h('path', {"d":"M8 21.5C8 21.773 7.773 22 7.5 22C7.227 22 7 21.773 7 21.5C7 21.227 7.227 21 7.5 21C7.773 21 8 21.227 8 21.5Z"})
        ]
      );
  }
});

export default CartRail;
export { CartRail };
