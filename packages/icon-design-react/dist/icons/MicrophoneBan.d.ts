import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophoneBanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophoneBan: ForwardRefExoticComponent<MicrophoneBanProps & RefAttributes<SVGSVGElement>>;

export default MicrophoneBan;
export { MicrophoneBan };
