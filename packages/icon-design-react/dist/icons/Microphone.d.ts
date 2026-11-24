import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophoneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Microphone: ForwardRefExoticComponent<MicrophoneProps & RefAttributes<SVGSVGElement>>;

export default Microphone;
export { Microphone };
