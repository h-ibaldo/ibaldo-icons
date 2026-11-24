import { defineComponent, h } from 'vue';

const InfoSquareSmall = defineComponent({
  name: 'InfoSquareSmall',
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
          h('rect', {"x":"3.949462878465056","y":"3.997562035597184","width":"16","height":"16","rx":"3","ry":"3"}),
          h('line', {"x1":"11.949462878465056","y1":"8.987562035596966","x2":"11.949462878465056","y2":"8.997562035597184"}),
          h('line', {"x1":"11.949462878465056","y1":"14.997562035597184","x2":"11.949462878465056","y2":"11.997562035597184"})
        ]
      );
  }
});

export default InfoSquareSmall;
export { InfoSquareSmall };
