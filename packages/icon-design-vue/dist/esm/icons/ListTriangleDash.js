import { defineComponent, h } from 'vue';

const ListTriangleDash = defineComponent({
  name: 'ListTriangleDash',
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
          h('path', {"d":"M13.648 22L20.352 22C21.516 22 22.238 20.727 21.637 19.727L18.285 14.145C17.703 13.172 16.297 13.172 15.715 14.145L12.363 19.727C11.762 20.727 12.484 22 13.648 22Z"}),
          h('path', {"d":"M8 5L14 5"}),
          h('path', {"d":"M8 10L14 10"}),
          h('path', {"d":"M3 5L4 5"}),
          h('path', {"d":"M3 10L4 10"}),
          h('path', {"d":"M8 15L11 15"}),
          h('path', {"d":"M3 15L4 15"})
        ]
      );
  }
});

export default ListTriangleDash;
export { ListTriangleDash };
