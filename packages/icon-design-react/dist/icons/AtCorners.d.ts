import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtCornersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtCorners: ForwardRefExoticComponent<AtCornersProps & RefAttributes<SVGSVGElement>>;

export default AtCorners;
export { AtCorners };
