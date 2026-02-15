import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsClockwise2SlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsClockwise2Slash: ForwardRefExoticComponent<ArrowsClockwise2SlashProps & RefAttributes<SVGSVGElement>>;

export default ArrowsClockwise2Slash;
export { ArrowsClockwise2Slash };
