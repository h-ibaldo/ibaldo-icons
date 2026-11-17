import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophoneGrilleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophoneGrille: ForwardRefExoticComponent<MicrophoneGrilleProps & RefAttributes<SVGSVGElement>>;

export default MicrophoneGrille;
export { MicrophoneGrille };
