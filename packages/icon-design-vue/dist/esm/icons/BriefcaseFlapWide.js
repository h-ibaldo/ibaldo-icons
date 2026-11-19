import { defineComponent, h } from 'vue';

const BriefcaseFlapWide = defineComponent({
  name: 'BriefcaseFlapWide',
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
          h('path', {"d":"M22,11.999999999998181l-10,3-10-3v-4c0-.552284749830505.447715250168585-1,1-1h18c.552284749829596,0,1,.447715250169495,1,1v4Z"}),
          h('path', {"d":"M3,12.29998779296875v7.700012207029431c0,.552284749830505.447715250168585,1,1,1h16c.552284749829596,0,1-.447715250169495,1-1v-7.700012207029431"}),
          h('path', {"d":"M8,6.999999999998181v-3c0-.552284749830505.447715250168585-1,1-1h6c.552284749829596,0,1,.447715250169495,1,1v3"})
        ]
      );
  }
});

export default BriefcaseFlapWide;
export { BriefcaseFlapWide };
