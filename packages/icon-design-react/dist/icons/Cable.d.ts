import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CableProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cable: ForwardRefExoticComponent<CableProps & RefAttributes<SVGSVGElement>>;

export default Cable;
export { Cable };
