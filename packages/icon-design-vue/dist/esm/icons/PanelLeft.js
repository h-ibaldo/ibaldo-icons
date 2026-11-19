import { defineComponent, h } from 'vue';

const PanelLeft = defineComponent({
  name: 'PanelLeft',
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
          h('rect', {"x":"2.050537047695798","y":"1.997697219531346","width":"20","height":"19.999864816291392","rx":"2.00000000000091","ry":"2.00000000000091","transform":"translate(24.101074094785993 23.99525925596236) rotate(-180)"}),
          h('polyline', {"points":"2.050623966566491 5.997562035775445 7.050623966566491 5.997562035775445 7.050623966566491 17.997426743134383 2.050623966566491 17.997426743134383"})
        ]
      );
  }
});

export default PanelLeft;
export { PanelLeft };
