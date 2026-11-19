import { defineComponent, h } from 'vue';

const Keypad = defineComponent({
  name: 'Keypad',
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
          h('rect', {"x":"1.974731449503452","y":"2.000000000479304","width":"4","height":"2"}),
          h('rect', {"x":"9.974731449503452","y":"2.000000000479304","width":"4","height":"2"}),
          h('rect', {"x":"17.974731449503452","y":"2.000000000479304","width":"4","height":"2"}),
          h('rect', {"x":"1.974731449503452","y":"8.000000000480213","width":"4","height":"2"}),
          h('rect', {"x":"9.974731449503452","y":"8.000000000480213","width":"4","height":"2"}),
          h('rect', {"x":"17.974731449503452","y":"8.000000000480213","width":"4","height":"2"}),
          h('rect', {"x":"1.974731449503452","y":"14.000000000480213","width":"4","height":"2"}),
          h('rect', {"x":"9.974731449503452","y":"14.000000000480213","width":"4","height":"2"}),
          h('rect', {"x":"9.974731449503452","y":"20.000000000480213","width":"4","height":"2"}),
          h('rect', {"x":"17.974731449503452","y":"14.000000000480213","width":"4","height":"2"})
        ]
      );
  }
});

export default Keypad;
export { Keypad };
