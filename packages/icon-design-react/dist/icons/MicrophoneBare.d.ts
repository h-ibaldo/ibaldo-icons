import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophoneBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophoneBare: ForwardRefExoticComponent<MicrophoneBareProps & RefAttributes<SVGSVGElement>>;

export default MicrophoneBare;
export { MicrophoneBare };
