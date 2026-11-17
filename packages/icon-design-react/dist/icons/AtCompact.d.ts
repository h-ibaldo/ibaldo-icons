import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtCompact: ForwardRefExoticComponent<AtCompactProps & RefAttributes<SVGSVGElement>>;

export default AtCompact;
export { AtCompact };
