import { defineComponent, h } from 'vue';

const ToolboxRound = defineComponent({
  name: 'ToolboxRound',
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
          h('path', {"d":"M21.414213562369696,9.414213562367877l-.828427124739392-.828427124739392c-.375072756900408-.375072756900408-.883780582700638-.585786437630304-1.41421356238061-.585786437630304H4.828429780320221c-.530432328991083,0-1.039139585640442.210713165199195-1.414212234580191.58578510983898l-.828429780329316.828428224720483c-.375073569150118.375072864850154-.585787765410714.883781259790339-.585787765410714,1.41421489016102v3.171571775279517h20v-3.171572875249694c0-.530432979679972-.210713680729896-1.039140805480201-.585786437630304-1.41421356238061Z"}),
          h('rect', {"x":"16","y":"11.999999999998181","width":"1","height":"4"}),
          h('rect', {"x":"7","y":"11.999999999998181","width":"1","height":"4"}),
          h('path', {"d":"M3,13.999999999998181v7c0,.552284749830505.447715250169495,1,1,1h16c.552284749830505,0,1-.447715250169495,1-1v-7"}),
          h('path', {"d":"M6,7.999999999998181v-3c0-1.104569499659192.895430500338989-2,2-2h8c1.104569499661011,0,2,.895430500340808,2,2v3"}),
          h('rect', {"x":"9","y":"1.999999999998181","width":"6","height":"2"})
        ]
      );
  }
});

export default ToolboxRound;
export { ToolboxRound };
