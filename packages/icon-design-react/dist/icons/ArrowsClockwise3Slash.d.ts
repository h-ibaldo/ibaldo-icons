import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsClockwise3SlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsClockwise3Slash: ForwardRefExoticComponent<ArrowsClockwise3SlashProps & RefAttributes<SVGSVGElement>>;

export default ArrowsClockwise3Slash;
export { ArrowsClockwise3Slash };
