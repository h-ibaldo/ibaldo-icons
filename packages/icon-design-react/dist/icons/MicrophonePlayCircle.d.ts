import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophonePlayCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophonePlayCircle: ForwardRefExoticComponent<MicrophonePlayCircleProps & RefAttributes<SVGSVGElement>>;

export default MicrophonePlayCircle;
export { MicrophonePlayCircle };
