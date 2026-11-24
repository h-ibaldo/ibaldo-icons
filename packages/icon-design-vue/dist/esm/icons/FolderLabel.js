import { defineComponent, h } from 'vue';

const FolderLabel = defineComponent({
  name: 'FolderLabel',
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
          h('path', {"d":"M19.99999997868963,20.999999999998181H4c-1.104569499659192,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500340808-2,2-2h3.9296305896587c.66870593549902,0,1.293168239901206.334201833509724,1.6640998992807.890598573469106l.812536329360228,1.218802853061788c.370931659390408.556396739959382.995393963790775.890598573469106,1.664099899289795.890598573469106h7.929633178260701c1.104569491610164,0,1.999999987849151.895430489210412,1.999999996509359,1.999999980818757l.000000086330147,11.00000000349246c.000000008659299,1.104569505789186-.895430494209904,2.000000015688784-2,2.000000015688784Z"}),
          h('rect', {"x":"11","y":"14.999999999998181","width":"7","height":"2"})
        ]
      );
  }
});

export default FolderLabel;
export { FolderLabel };
