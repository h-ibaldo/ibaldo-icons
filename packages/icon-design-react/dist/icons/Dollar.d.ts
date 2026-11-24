import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DollarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Dollar: ForwardRefExoticComponent<DollarProps & RefAttributes<SVGSVGElement>>;

export default Dollar;
export { Dollar };
