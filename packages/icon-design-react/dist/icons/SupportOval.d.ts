import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SupportOvalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SupportOval: ForwardRefExoticComponent<SupportOvalProps & RefAttributes<SVGSVGElement>>;

export default SupportOval;
export { SupportOval };
