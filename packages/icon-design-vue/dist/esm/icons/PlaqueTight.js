import { defineComponent, h } from 'vue';

const PlaqueTight = defineComponent({
  name: 'PlaqueTight',
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
          h('line', {"x1":"7.999999981000656","y1":"9.999996563432433","x2":"15.999999981000656","y2":"9.999996563432433"}),
          h('line', {"x1":"7.999999981000656","y1":"13.999996563432433","x2":"15.999999981000656","y2":"13.999996563432433"}),
          h('path', {"d":"M21.999999981000656,15.999996563432433V7.999996563432433c-1.104553222650793,0-2-.89544677734375-2-2H3.999999981000656c0,1.10455322265625-.895446777340112,2-2,2v8c1.104553222659888,0,2,.8953857421875,2,2h16c0-1.1046142578125.895446777349207-2,2-2Z"})
        ]
      );
  }
});

export default PlaqueTight;
export { PlaqueTight };
