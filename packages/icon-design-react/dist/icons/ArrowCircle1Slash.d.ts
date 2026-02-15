import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCircle1SlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCircle1Slash: ForwardRefExoticComponent<ArrowCircle1SlashProps & RefAttributes<SVGSVGElement>>;

export default ArrowCircle1Slash;
export { ArrowCircle1Slash };
