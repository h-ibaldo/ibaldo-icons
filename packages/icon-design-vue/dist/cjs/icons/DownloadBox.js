'use strict';

const { defineComponent, h } = require('vue');

const DownloadBox = defineComponent({
  name: 'DownloadBox',
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
          h('rect', {"x":"1.974731476735542","y":"7.000000026766429","width":"20","height":"15","rx":"2","ry":"2"}),
          h('path', {"d":"M1.974731476735542,9.000000026766429v-.338096210310141c0-1.087463676366497.295547000037914-2.154482123111848.855042445720755-3.086974532565364l1.562352460779948-2.603920767980526c.36144649293783-.602410821546073,1.012460147168895-.971008489143969,1.714985851427627-.971008489143969h11.735238484132424c.702525704269647,0,1.353539358489797.368597667599715,1.714985851416714.971008489143969l1.562352460790862,2.603920767982345c.559495445679204.932492409452607.855042445731669,1.999510856200686.855042445731669,3.086974532566273v.338096210307413"}),
          h('polyline', {"points":"8.974731450032778 15.000000000462023 11.974731476735542 18.000000026766429 14.974731450032778 15.000000000462023"}),
          h('line', {"x1":"11.974731476735542","y1":"11.000000026766429","x2":"11.974731476735542","y2":"18.000000026766429"})
        ]
      );
  }
});

module.exports = DownloadBox;
module.exports.DownloadBox = DownloadBox;
module.exports.default = DownloadBox;
