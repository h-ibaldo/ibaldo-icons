import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AwardSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AwardSquare: ForwardRefExoticComponent<AwardSquareProps & RefAttributes<SVGSVGElement>>;

export default AwardSquare;
export { AwardSquare };
