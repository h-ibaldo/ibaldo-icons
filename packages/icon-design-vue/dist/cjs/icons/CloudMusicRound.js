'use strict';

const { defineComponent, h } = require('vue');

const CloudMusicRound = defineComponent({
  name: 'CloudMusicRound',
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
          h('g', {}, [
            h('polyline', {"points":"15 13.999999973497324 12 12.999999973497324 12 19.999999973497324"}),
            h('ellipse', {"cx":"10.5","cy":"19.999999973497324","rx":"1.5","ry":"1"})
          ]),
          h('path', {"d":"M17,17.999999973497324c2.761474609369543,0,5-2.238586425788526,5-5,0-2.44482421875-1.757019042970569-4.47235107421875-4.075744628909888-4.906860351558862-.438171386720569-2.882202148441138-2.919616699220569-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371099207,5.093139648441138-2.318725585930224.434509277340112-4.075744628900793,2.462036132808862-4.075744628900793,4.906860351558862,0,2.047790527340112,1.237548828119543,3.796447753909888,3,4.5693359375"})
        ]
      );
  }
});

module.exports = CloudMusicRound;
module.exports.CloudMusicRound = CloudMusicRound;
module.exports.default = CloudMusicRound;
