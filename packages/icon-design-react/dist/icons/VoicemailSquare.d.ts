import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VoicemailSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VoicemailSquare: ForwardRefExoticComponent<VoicemailSquareProps & RefAttributes<SVGSVGElement>>;

export default VoicemailSquare;
export { VoicemailSquare };
