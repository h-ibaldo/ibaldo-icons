import { defineComponent, h } from 'vue';

const PushpinOff = defineComponent({
  name: 'PushpinOff',
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
          h('path', {"d":"M3 3L21 21"}),
          h('path', {"d":"M21.234 6.234L17.762 2.762C17.352 2.352 16.676 2.379 16.297 2.82L11.953 7.887C11.688 8.195 11.273 8.297 10.883 8.188C8.512 7.535 5.863 8.133 4 10L14 20C15.863 18.133 16.465 15.488 15.813 13.117C15.703 12.727 15.805 12.309 16.109 12.047L21.18 7.703C21.621 7.324 21.648 6.648 21.234 6.234Z"}),
          h('path', {"d":"M2 22L9 15"})
        ]
      );
  }
});

export default PushpinOff;
export { PushpinOff };
