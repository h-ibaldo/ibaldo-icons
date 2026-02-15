import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsHexagon2SlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsHexagon2Slash: ForwardRefExoticComponent<ArrowsHexagon2SlashProps & RefAttributes<SVGSVGElement>>;

export default ArrowsHexagon2Slash;
export { ArrowsHexagon2Slash };
