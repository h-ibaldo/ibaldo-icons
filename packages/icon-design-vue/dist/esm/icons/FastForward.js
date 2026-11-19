import { defineComponent, h } from 'vue';

const FastForward = defineComponent({
  name: 'FastForward',
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
          h('path', {"d":"M2 4.641L2 19.363C2 20.188 2.98 20.621 3.59 20.066L11.688 12.703C12.105 12.328 12.105 11.672 11.688 11.297L3.59 3.934C2.98 3.379 2 3.813 2 4.641Z"}),
          h('path', {"d":"M12 4.641L12 19.363C12 20.188 12.98 20.621 13.59 20.066L21.688 12.703C22.105 12.328 22.105 11.672 21.688 11.297L13.59 3.934C12.98 3.379 12 3.813 12 4.641Z"})
        ]
      );
  }
});

export default FastForward;
export { FastForward };
