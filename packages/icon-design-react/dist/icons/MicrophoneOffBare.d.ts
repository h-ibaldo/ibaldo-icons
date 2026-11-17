import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophoneOffBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophoneOffBare: ForwardRefExoticComponent<MicrophoneOffBareProps & RefAttributes<SVGSVGElement>>;

export default MicrophoneOffBare;
export { MicrophoneOffBare };
