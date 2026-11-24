import { defineComponent, h } from 'vue';

const FolderXCenter = defineComponent({
  name: 'FolderXCenter',
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
          h('path', {"d":"M19.999999936059794,20.999999999998181H3.999999957370164c-1.104569499660101,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500339899-2,2-2h3.92963058965961c.668705935499929,0,1.293168239900297.334201833509724,1.664099899290704.890598573469106l.812536329359318,1.218802853061788c.370931659380403.556396739959382.995393963780771.890598573469106,1.66409989927979.890598573469106h7.929633178270706c1.104569491600159,0,1.999999987839146.895430489210412,1.999999996510269,1.999999980818757l.000000086319233,11.00000000349246c.000000008670213,1.104569505789186-.895430494209904,2.000000015688784-2,2.000000015688784Z"}),
          h('g', {}, [
            h('line', {"x1":"14.999999978579581","y1":"10.999999999998181","x2":"8.999999978799679","y2":"15.999999999998181"}),
            h('line', {"x1":"8.999999978690539","y1":"11.000000000109139","x2":"14.999999978690539","y2":"15.999999999887223"})
          ])
        ]
      );
  }
});

export default FolderXCenter;
export { FolderXCenter };
