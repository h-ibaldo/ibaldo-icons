import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtCornersCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtCornersCompact: ForwardRefExoticComponent<AtCornersCompactProps & RefAttributes<SVGSVGElement>>;

export default AtCornersCompact;
export { AtCornersCompact };
