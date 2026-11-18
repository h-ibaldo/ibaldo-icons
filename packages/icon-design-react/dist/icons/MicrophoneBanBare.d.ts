import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophoneBanBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophoneBanBare: ForwardRefExoticComponent<MicrophoneBanBareProps & RefAttributes<SVGSVGElement>>;

export default MicrophoneBanBare;
export { MicrophoneBanBare };
