import { defineComponent, h } from 'vue';

const SunSpiky = defineComponent({
  name: 'SunSpiky',
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
          h('path', {"d":"M17.085205078119543,14.1063232421875l4.914794921880457-2.106323242189319-4.914794921880457-2.106323242189319,1.98583984375-4.964782714840112-4.964721679680224,1.985900878898974-2.106323242189319-4.914794921869543-2.106323242189319,4.914794921869543-4.964721679691138-1.985900878898974,1.98583984375,4.964721679689319-4.914794921869543,2.106384277340112,4.914794921869543,2.106384277340112-1.98583984375,4.964660644529431,4.964599609380457-1.985900878898974,2.1064453125,4.914855957029431,2.1064453125-4.914855957029431,4.964599609369543,1.985900878898974-1.98583984375-4.964721679680224Z"}),
          h('circle', {"cx":"12","cy":"11.999999999998181","r":"2"})
        ]
      );
  }
});

export default SunSpiky;
export { SunSpiky };
