import { defineComponent, h } from 'vue';

const LockKeyhole = defineComponent({
  name: 'LockKeyhole',
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
          h('rect', {"x":"3.974731444799545","y":"10.000000003892637","width":"16","height":"12","rx":"1","ry":"1"}),
          h('path', {"d":"M16.974731444799545,10.000000003892637v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999994999999217-4.999994999998307h-.000010000000657c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999994999998307v3.000005000001693"}),
          h('line', {"x1":"11.974731444799545","y1":"18.000000003892637","x2":"11.974731444799545","y2":"16.000000003892637"}),
          h('circle', {"cx":"11.974731444799545","cy":"15.000000003892637","r":"1"})
        ]
      );
  }
});

export default LockKeyhole;
export { LockKeyhole };
