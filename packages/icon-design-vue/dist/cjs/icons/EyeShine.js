'use strict';

const { defineComponent, h } = require('vue');

const EyeShine = defineComponent({
  name: 'EyeShine',
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
          h('path', {"d":"M12.025268539455283,5.997562040162848c-4.272705078119543,0-8.178466796869543,2.44097900390625-10,6,1.821533203130457,3.559020996094659,5.727294921880457,6,10,6,4.272705078130457,0,8.178466796880457-2.440979003905341,10-6-1.821533203119543-3.55902099609375-5.727294921869543-6-10-6Z"}),
          h('path', {"d":"M12.025268539455283,8.997562040162848c-1.656854249398748,0-3,1.343145750601252-3,3,0,1.656854249399657,1.343145750601252,3,3,3,1.656854249400567,0,3-1.343145750600343,3-3"})
        ]
      );
  }
});

module.exports = EyeShine;
module.exports.EyeShine = EyeShine;
module.exports.default = EyeShine;
