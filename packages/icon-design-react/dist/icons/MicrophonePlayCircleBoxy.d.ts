import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophonePlayCircleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophonePlayCircleBoxy: ForwardRefExoticComponent<MicrophonePlayCircleBoxyProps & RefAttributes<SVGSVGElement>>;

export default MicrophonePlayCircleBoxy;
export { MicrophonePlayCircleBoxy };
