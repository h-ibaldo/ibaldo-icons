import { defineComponent, h } from 'vue';

const FolderXCircle = defineComponent({
  name: 'FolderXCircle',
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
          h('path', {"d":"M8.999999978690539,20.999999999998181H3.999999978690539c-1.104569499661011,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500338989-2,2-2h3.92963058965961c.668705935499929,0,1.293168239900297.334201833509724,1.66409989927979.890598573469106l.812536328739952,1.218802852130466c.370931659730559.556396740470518.995393964910363.890598574049363,1.664099901030568.890598573470925l7.929633082540022-.000000006919436c1.104569510369402-.000000000960426,2.000000035499397.8954304782892,2.000000091109541,1.999999988667696l.000000100710167,1.000000019181243"}),
          h('g', {}, [
            h('circle', {"cx":"16.499999981117526","cy":"16.499999997570285","r":"5.499999997577106"}),
            h('line', {"x1":"17.999999983539965","y1":"14.999999995146936","x2":"14.999999983539965","y2":"17.999999995146936"}),
            h('line', {"x1":"14.999999983609996","y1":"14.999999995077815","x2":"17.999999983479938","y2":"17.999999995217877"})
          ])
        ]
      );
  }
});

export default FolderXCircle;
export { FolderXCircle };
