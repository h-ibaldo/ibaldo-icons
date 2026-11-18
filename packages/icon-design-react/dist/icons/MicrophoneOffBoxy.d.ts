import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophoneOffBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophoneOffBoxy: ForwardRefExoticComponent<MicrophoneOffBoxyProps & RefAttributes<SVGSVGElement>>;

export default MicrophoneOffBoxy;
export { MicrophoneOffBoxy };
