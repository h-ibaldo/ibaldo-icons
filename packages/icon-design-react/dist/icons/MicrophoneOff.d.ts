import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophoneOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophoneOff: ForwardRefExoticComponent<MicrophoneOffProps & RefAttributes<SVGSVGElement>>;

export default MicrophoneOff;
export { MicrophoneOff };
