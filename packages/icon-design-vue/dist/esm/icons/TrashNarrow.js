import { defineComponent, h } from 'vue';

const TrashNarrow = defineComponent({
  name: 'TrashNarrow',
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
          h('path', {"d":"M18.0252685457599,6.000000001483386v13.999999999998181c0,1.104569499661011-.895430500338989,2-2,2h-8c-1.104569499670106,0-2-.895430500338989-2-2V6.000000001483386"}),
          h('line', {"x1":"10.0252685457599","y1":"10.000000001483386","x2":"10.0252685457599","y2":"18.000000001481567"}),
          h('line', {"x1":"14.0252685457599","y1":"10.000000001483386","x2":"14.0252685457599","y2":"18.000000001481567"}),
          h('line', {"x1":"4.0252685457599","y1":"6.000000001483386","x2":"20.0252685457599","y2":"6.000000001483386"}),
          h('path', {"d":"M15.0252685457599,6.000000001483386v-2.353921007720601c0-.909104324454347-.736974667830509-1.646078992281218-1.646078992280309-1.646078992281218h-2.707842015450296c-.9091043244498,0-1.646078992269395.736974667826871-1.646078992269395,1.646078992281218v2.353921007720601"})
        ]
      );
  }
});

export default TrashNarrow;
export { TrashNarrow };
