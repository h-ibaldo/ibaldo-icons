import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface JustifyRightFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const JustifyRightFlipped: ForwardRefExoticComponent<JustifyRightFlippedProps & RefAttributes<SVGSVGElement>>;

export default JustifyRightFlipped;
export { JustifyRightFlipped };
