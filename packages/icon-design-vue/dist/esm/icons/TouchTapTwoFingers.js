import { defineComponent, h } from 'vue';

const TouchTapTwoFingers = defineComponent({
  name: 'TouchTapTwoFingers',
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
          h('circle', {"cx":"6.974731413245536","cy":"13.998779298537556","r":"5"}),
          h('path', {"d":"M11.974731413245536,6.516418458693806c-1.430297851558862-.9576416015625-3.1494140625-1.51763916015625-5-1.51763916015625s-3.569702148439319.55999755859375-5,1.51763916015625"}),
          h('circle', {"cx":"16.974731413245536","cy":"13.998779298537556","r":"5"}),
          h('path', {"d":"M21.974731413245536,6.516418458693806c-1.430297851558862-.9576416015625-3.1494140625-1.51763916015625-5-1.51763916015625s-3.569702148439319.55999755859375-5,1.51763916015625"})
        ]
      );
  }
});

export default TouchTapTwoFingers;
export { TouchTapTwoFingers };
