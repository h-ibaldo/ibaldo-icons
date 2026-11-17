import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophonePlayCircleGrilleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophonePlayCircleGrille: ForwardRefExoticComponent<MicrophonePlayCircleGrilleProps & RefAttributes<SVGSVGElement>>;

export default MicrophonePlayCircleGrille;
export { MicrophonePlayCircleGrille };
