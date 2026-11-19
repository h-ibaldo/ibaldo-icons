import { defineComponent, h } from 'vue';

const InfoSquare = defineComponent({
  name: 'InfoSquare',
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
          h('line', {"x1":"11.949462878465056","y1":"7.987562035596966","x2":"11.949462878465056","y2":"7.997562035597184"}),
          h('line', {"x1":"11.949462878465056","y1":"15.997562035597184","x2":"11.949462878465056","y2":"11.997562035597184"}),
          h('rect', {"x":"1.94946287847597","y":"1.997562036048294","width":"20","height":"20","rx":"3","ry":"3"})
        ]
      );
  }
});

export default InfoSquare;
export { InfoSquare };
