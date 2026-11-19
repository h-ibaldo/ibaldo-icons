'use strict';

const { defineComponent, h } = require('vue');

const TrashTapered = defineComponent({
  name: 'TrashTapered',
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
          h('rect', {"x":"3.0252685457599","y":"6.000000001481567","width":"18","height":"3","rx":"1","ry":"1"}),
          h('path', {"d":"M19.0252685457599,9.000000001481567l-.857953307520802,11.153392997768606c-.080153410768617,1.041994339989287-.949036354479176,1.846607002231394-1.994108971008245,1.846607002231394H7.877330824279852c-1.045072616530888,0-1.913955560230534-.804612662242107-1.99410897099915-1.846607002231394l-.857953307520802-11.153392997768606"}),
          h('line', {"x1":"10.0252685457599","y1":"13.000000001481567","x2":"10.0252685457599","y2":"18.000000001481567"}),
          h('line', {"x1":"14.0252685457599","y1":"13.000000001481567","x2":"14.0252685457599","y2":"18.000000001481567"}),
          h('path', {"d":"M15.0252685457599,6.000000001481567v-2.353921007723329c0-.909104324451619-.736974667830509-1.64607899227849-1.646078992280309-1.64607899227849h-2.707842015448477c-.909104324451619,0-1.646078992271214.736974667826871-1.646078992271214,1.64607899227849v2.353921007723329"})
        ]
      );
  }
});

module.exports = TrashTapered;
module.exports.TrashTapered = TrashTapered;
module.exports.default = TrashTapered;
