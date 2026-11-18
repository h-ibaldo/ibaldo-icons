import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophoneOffGrilleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophoneOffGrille: ForwardRefExoticComponent<MicrophoneOffGrilleProps & RefAttributes<SVGSVGElement>>;

export default MicrophoneOffGrille;
export { MicrophoneOffGrille };
