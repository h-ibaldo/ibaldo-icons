import { defineComponent, h } from 'vue';

const Folder = defineComponent({
  name: 'Folder',
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
          h('path', {"d":"M19.999999978690539,20.999999999998181H4c-1.104569499660101,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500339899-2,2-2h3.929630589660519c.66870593549902,0,1.293168239899387.334201833509724,1.664099899289795.890598573469106l.812536329360228,1.218802853061788c.370931659379494.556396739959382.995393963779861.890598573469106,1.66409989927979.890598573469106h7.929633178269796c1.104569491600159,0,1.999999987840056.895430489210412,1.999999996510269,1.999999980818757l.000000086320142,11.00000000349246c.000000008669303,1.104569505789186-.895430494210814,2.000000015688784-2,2.000000015688784Z"})
        ]
      );
  }
});

export default Folder;
export { Folder };
