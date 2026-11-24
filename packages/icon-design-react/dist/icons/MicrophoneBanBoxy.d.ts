import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophoneBanBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophoneBanBoxy: ForwardRefExoticComponent<MicrophoneBanBoxyProps & RefAttributes<SVGSVGElement>>;

export default MicrophoneBanBoxy;
export { MicrophoneBanBoxy };
