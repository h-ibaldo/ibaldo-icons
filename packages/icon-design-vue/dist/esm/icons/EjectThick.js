import { defineComponent, h } from 'vue';

const EjectThick = defineComponent({
  name: 'EjectThick',
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
          h('path', {"d":"M4.348 13L19.652 13C20.801 13 21.402 11.641 20.633 10.793L13.129 2.5C12.523 1.832 11.477 1.832 10.875 2.5L3.367 10.793C2.598 11.641 3.199 13 4.348 13Z"}),
          h('path', {"d":"M21 21L21 19C21 18.449 20.551 18 20 18L4 18C3.449 18 3 18.449 3 19L3 21C3 21.551 3.449 22 4 22L20 22C20.551 22 21 21.551 21 21Z"})
        ]
      );
  }
});

export default EjectThick;
export { EjectThick };
