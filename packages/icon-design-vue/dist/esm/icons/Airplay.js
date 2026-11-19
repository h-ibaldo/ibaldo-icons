import { defineComponent, h } from 'vue';

const Airplay = defineComponent({
  name: 'Airplay',
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
          h('path', {"d":"M17.999999971900252,14.999996564601133h2c1.104553222648974,0,2-.89544677734375,2-2V4.999996564601133c0-1.10455322265625-.895446777351026-2-2-2H3.999999971900252c-1.104553222659888,0-2,.89544677734375-2,2v8c0,1.10455322265625.895446777340112,2,2,2h2"}),
          h('path', {"d":"M11.24074336952981,14.885795934025737l-3.825779363240144,4.463409257118656c-.556005705739153.648673323361436-.09509661805896,1.650791373456741.759256602359528,1.650791373456741h7.651558726491203c.854353220429402,0,1.3152623081005-1.002118050095305.759256602370442-1.650791373456741l-3.825779363251058-4.463409257118656c-.399095573189697-.465611502054344-1.119417631529359-.465611502054344-1.51851320472997,0Z"})
        ]
      );
  }
});

export default Airplay;
export { Airplay };
