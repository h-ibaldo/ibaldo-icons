import { defineComponent, h } from 'vue';

const TrashLid = defineComponent({
  name: 'TrashLid',
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
          h('rect', {"x":"4.0252685457599","y":"6.000000001481567","width":"16","height":"3","rx":"1","ry":"1"}),
          h('path', {"d":"M18.0252685457599,9.000000001481567v11c0,1.104569499661011-.895430500338989,2-2,2h-8c-1.104569499659192,0-2-.895430500338989-2-2v-11"}),
          h('line', {"x1":"10.0252685457599","y1":"13.000000001481567","x2":"10.0252685457599","y2":"18.000000001481567"}),
          h('line', {"x1":"14.0252685457599","y1":"13.000000001481567","x2":"14.0252685457599","y2":"18.000000001481567"}),
          h('path', {"d":"M15.0252685457599,6.000000001481567v-2.353921007723329c0-.909104324451619-.736974667830509-1.64607899227849-1.646078992280309-1.64607899227849h-2.707842015450296c-.9091043244498,0-1.646078992269395.736974667826871-1.646078992269395,1.64607899227849v2.353921007723329"})
        ]
      );
  }
});

export default TrashLid;
export { TrashLid };
