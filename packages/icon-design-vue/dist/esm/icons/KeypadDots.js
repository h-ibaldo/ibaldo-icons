import { defineComponent, h } from 'vue';

const KeypadDots = defineComponent({
  name: 'KeypadDots',
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
          h('circle', {"cx":"11.974731449503452","cy":"3.000000000479304","r":"1"}),
          h('circle', {"cx":"5.974731449503452","cy":"3.000000000479304","r":"1"}),
          h('circle', {"cx":"17.974731449503452","cy":"3.000000000479304","r":"1"}),
          h('circle', {"cx":"11.974731449503452","cy":"9.000000000480213","r":"1"}),
          h('circle', {"cx":"5.974731449503452","cy":"9.000000000480213","r":"1"}),
          h('circle', {"cx":"17.974731449503452","cy":"9.000000000480213","r":"1"}),
          h('circle', {"cx":"11.974731449503452","cy":"15.000000000480213","r":"1"}),
          h('circle', {"cx":"5.974731449503452","cy":"15.000000000480213","r":"1"}),
          h('circle', {"cx":"17.974731449503452","cy":"15.000000000480213","r":"1"}),
          h('circle', {"cx":"11.974731449503452","cy":"21.000000000480213","r":"1"})
        ]
      );
  }
});

export default KeypadDots;
export { KeypadDots };
