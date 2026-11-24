import { defineComponent, h } from 'vue';

const DotsVertical = defineComponent({
  name: 'DotsVertical',
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
          h('rect', {"x":"11.025268639606793","y":"10.999996551712044","width":"1.999999978512733","height":"1.999999921422985","rx":".999402538453914","ry":".999402538453914"}),
          h('rect', {"x":"11.025268639606679","y":"1.999996564256747","width":"1.99999997851296","height":"1.999999921421535","rx":".999402538466265","ry":".999402538466265"}),
          h('rect', {"x":"11.025268639606793","y":"19.999996485710795","width":"1.999999978512733","height":"1.999999921455412","rx":".999402538456675","ry":".999402538456675"})
        ]
      );
  }
});

export default DotsVertical;
export { DotsVertical };
