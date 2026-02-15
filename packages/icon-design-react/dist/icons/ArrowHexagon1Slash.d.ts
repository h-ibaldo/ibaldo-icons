import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowHexagon1SlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowHexagon1Slash: ForwardRefExoticComponent<ArrowHexagon1SlashProps & RefAttributes<SVGSVGElement>>;

export default ArrowHexagon1Slash;
export { ArrowHexagon1Slash };
