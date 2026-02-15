import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCircle2SlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCircle2Slash: ForwardRefExoticComponent<ArrowCircle2SlashProps & RefAttributes<SVGSVGElement>>;

export default ArrowCircle2Slash;
export { ArrowCircle2Slash };
