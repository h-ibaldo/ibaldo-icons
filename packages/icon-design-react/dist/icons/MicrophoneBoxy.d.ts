import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophoneBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophoneBoxy: ForwardRefExoticComponent<MicrophoneBoxyProps & RefAttributes<SVGSVGElement>>;

export default MicrophoneBoxy;
export { MicrophoneBoxy };
