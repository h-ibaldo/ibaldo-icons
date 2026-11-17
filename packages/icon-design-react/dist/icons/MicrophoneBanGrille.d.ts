import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MicrophoneBanGrilleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MicrophoneBanGrille: ForwardRefExoticComponent<MicrophoneBanGrilleProps & RefAttributes<SVGSVGElement>>;

export default MicrophoneBanGrille;
export { MicrophoneBanGrille };
