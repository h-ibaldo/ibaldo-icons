import { defineComponent, h } from 'vue';

const ButtonPillScribble = defineComponent({
  name: 'ButtonPillScribble',
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
          h('rect', {"x":"1.999999995185689","y":"6.999999997010121","width":"20.000000000000028","height":"10.000000007293295","rx":"4.99999500897246","ry":"4.99999500897246"}),
          h('polyline', {"points":"6.999999990797733 13.000000000448381 8.999999990797733 11.000000000448381 10.999999990797733 13.000000000448381 12.999999990797733 11.000000000448381 14.999999990797733 13.000000000448381 16.999999990797733 11.000000000448381"})
        ]
      );
  }
});

export default ButtonPillScribble;
export { ButtonPillScribble };
