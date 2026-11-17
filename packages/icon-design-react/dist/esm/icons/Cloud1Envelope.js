import { createElement, forwardRef } from 'react';

const Cloud1Envelope = forwardRef(function Cloud1Envelope(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('rect', {"x":"9.999999999996362","y":"13.301707131447984","width":"12","height":"8.698292868270073","rx":"1","ry":"1","key":"0"}),
    createElement('path', {"d":"M10.325256347652612,13.572764260357872l4.9835728771086,4.766210860851061c.386606835409111.369744707919381.995734715061189.369744707919381,1.38234155047212,0l4.983572877106781-4.766210860851061","key":"1"}),
    createElement('path', {"d":"M21.445251464840112,9.999999999718057c-.69293212890625-1.190612792979664-1.96844482421875-2-3.44525146484375-2h-.02520751953125c.014892578125-.164916992180224.02520751953125-.331176757810681.02520751953125-.5,0-3.037536621090112-2.46246337890625-5.5-5.5-5.5-2.13836669921875,0-3.98736572265625,1.222900390631366-4.89727783203125,3.005187988270336-.0345458984375-.000610351560681-.06805419921875-.005187988270336-.10272216796875-.005187988270336-3.03753662109375,0-5.5,2.462463378909888-5.5,5.5,0,2.516784667959655,1.69256591796875,4.634033203131366,4,5.28759765625","key":"2"})
  );
});

Cloud1Envelope.displayName = 'Cloud1Envelope';

export default Cloud1Envelope;
export { Cloud1Envelope };
