import { defineComponent, h } from 'vue';

const TrashDetached = defineComponent({
  name: 'TrashDetached',
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
          h('path', {"d":"M18.025268545770814,6.000000001481567v14c0,1.104569499661011-.895430500340808,2-2,2h-8c-1.104569499671925,0-2-.895430500338989-2-2V6.000000001481567"}),
          h('line', {"x1":"10.025268545770814","y1":"10.000000001481567","x2":"10.025268545770814","y2":"18.000000001481567"}),
          h('line', {"x1":"14.025268545770814","y1":"10.000000001481567","x2":"14.025268545770814","y2":"18.000000001481567"}),
          h('line', {"x1":"20.025268545770814","y1":"6.000000001481567","x2":"4.025268545770814","y2":"6.000000001481567"}),
          h('line', {"x1":"9.025268545770814","y1":"2.000000001481567","x2":"14.025268545770814","y2":"2.000000001481567"})
        ]
      );
  }
});

export default TrashDetached;
export { TrashDetached };
