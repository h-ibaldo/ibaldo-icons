import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCircle3SlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCircle3Slash: ForwardRefExoticComponent<ArrowCircle3SlashProps & RefAttributes<SVGSVGElement>>;

export default ArrowCircle3Slash;
export { ArrowCircle3Slash };
