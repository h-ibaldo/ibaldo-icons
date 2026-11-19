'use strict';

const { defineComponent, h } = require('vue');

const DiagramMindMap = defineComponent({
  name: 'DiagramMindMap',
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
          h('circle', {"cx":"3.949462885142566","cy":"4.000000000480213","r":"2"}),
          h('line', {"x1":"8.828124994517566","y1":"8.878662109858851","x2":"5.363647455455066","y2":"5.414184570789075"}),
          h('circle', {"cx":"17.949462885142566","cy":"4.000000000480213","r":"2"}),
          h('line', {"x1":"16.535278314830066","y1":"5.414184570789075","x2":"13.070800775767566","y2":"8.878662109858851"}),
          h('circle', {"cx":"3.949462885142566","cy":"18.000000000480213","r":"2"}),
          h('line', {"x1":"5.363647455455066","y1":"16.585815430167713","x2":"8.828124994517566","y2":"13.121337891108851"}),
          h('circle', {"cx":"19.949462885142566","cy":"14.000000000480213","r":"2"}),
          h('circle', {"cx":"10.949462885142566","cy":"11.000000000480213","r":"3"}),
          h('line', {"x1":"18.060424799205066","y1":"13.370361328608851","x2":"13.782958978892566","y2":"11.944580078608851"}),
          h('circle', {"cx":"13.949462885142566","cy":"20.000000000480213","r":"2"}),
          h('line', {"x1":"13.319824213522224","y1":"18.11096191445904","x2":"11.894042964098844","y2":"13.833496093950089"})
        ]
      );
  }
});

module.exports = DiagramMindMap;
module.exports.DiagramMindMap = DiagramMindMap;
module.exports.default = DiagramMindMap;
