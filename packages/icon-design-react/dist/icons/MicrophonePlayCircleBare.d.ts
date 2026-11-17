import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophonePlayCircleBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophonePlayCircleBare: ForwardRefExoticComponent<MicrophonePlayCircleBareProps & RefAttributes<SVGSVGElement>>;

export default MicrophonePlayCircleBare;
export { MicrophonePlayCircleBare };
