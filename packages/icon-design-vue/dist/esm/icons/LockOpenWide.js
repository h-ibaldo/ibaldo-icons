import { defineComponent, h } from 'vue';

const LockOpenWide = defineComponent({
  name: 'LockOpenWide',
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
          h('rect', {"x":"3.974731450040053","y":"13.000000003885361","width":"16","height":"9","rx":"1","ry":"1"}),
          h('path', {"d":"M16.974731450040053,7.000000003885361c0-2.76141357421875-2.238525390610448-5-5-5-2.761474609360448,0-5,2.23858642578125-5,5v6"})
        ]
      );
  }
});

export default LockOpenWide;
export { LockOpenWide };
