import { defineComponent, h } from 'vue';

const GaugeDashed = defineComponent({
  name: 'GaugeDashed',
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
          h('path', {"d":"M7.207 20.777C8.633 21.555 10.266 22 12 22C13.945 22 15.758 21.434 17.293 20.473"}),
          h('path', {"d":"M2.031 12.617C2.148 14.535 2.801 16.309 3.852 17.781"}),
          h('path', {"d":"M20.473 17.293C21.438 15.758 22 13.945 22 12C22 7.254 18.688 3.285 14.25 2.266"}),
          h('path', {"d":"M9.75 2.266C9.176 2.395 8.617 2.57 8.086 2.797"}),
          h('path', {"d":"M4.457 5.449C3.754 6.258 3.176 7.176 2.762 8.18"}),
          h('path', {"d":"M16 8L12 12"}),
          h('path', {"d":"M11 12C11 11.445 11.449 11 12 11C12.551 11 13 11.445 13 12C13 12.555 12.551 13 12 13C11.449 13 11 12.555 11 12Z"})
        ]
      );
  }
});

export default GaugeDashed;
export { GaugeDashed };
