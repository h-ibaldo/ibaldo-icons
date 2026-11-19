import { defineComponent, h } from 'vue';

const ScanFileSlot = defineComponent({
  name: 'ScanFileSlot',
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
          h('path', {"d":"M8 12L16 12"}),
          h('path', {"d":"M8 8L10 8"}),
          h('path', {"d":"M2 16L22 16"}),
          h('path', {"d":"M4 16L4 3C4 2.448 4.448 2 5 2L14.016 2C14.646 2 15.25 2.25 15.696 2.696L19.304 6.304C19.75 6.75 20 7.354 20 7.984L20 16"}),
          h('path', {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8"}),
          h('path', {"d":"M20 20L20 21C20 21.552 19.552 22 19 22L5 22C4.448 22 4 21.552 4 21L4 20"})
        ]
      );
  }
});

export default ScanFileSlot;
export { ScanFileSlot };
