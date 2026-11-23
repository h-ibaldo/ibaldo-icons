import { defineComponent, h } from 'vue';

const Gamepad = defineComponent({
  name: 'Gamepad',
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
          h('path', {"d":"M12 6C9 6 8.223 4 6 4C2.301 4 2.012 13.074 2 15C1.988 16.926 2.805 19.012 5 19C7.195 18.988 9.309 15 12 15"}),
          h('path', {"d":"M12 6C15 6 15.777 4 18 4C21.699 4 21.988 13.074 22 15C22.012 16.926 21.195 19.012 19 19C16.805 18.988 14.691 15 12 15"}),
          h('path', {"d":"M5 11L9 11"}),
          h('path', {"d":"M7 9L7 13"}),
          h('path', {"d":"M17 9L17 9"}),
          h('path', {"d":"M17 13L17 13"}),
          h('path', {"d":"M19 11L19 11"}),
          h('path', {"d":"M15 11L15 11"})
        ]
      );
  }
});

export default Gamepad;
export { Gamepad };
