import { defineComponent, h } from 'vue';

const SparklePlusDouble = defineComponent({
  name: 'SparklePlusDouble',
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
          h('path', {"d":"M4 12C8.695 12 12.5 15.582 12.5 20"}),
          h('path', {"d":"M21 12C16.305 12 12.5 15.582 12.5 20"}),
          h('path', {"d":"M21 12C16.305 12 12.5 8.418 12.5 4"}),
          h('path', {"d":"M4 12C8.695 12 12.5 8.418 12.5 4"}),
          h('path', {"d":"M5.5 3L5.5 8"}),
          h('path', {"d":"M8 5.5L3 5.5"}),
          h('path', {"d":"M19.5 17L19.5 20"}),
          h('path', {"d":"M21 18.5L18 18.5"})
        ]
      );
  }
});

export default SparklePlusDouble;
export { SparklePlusDouble };
