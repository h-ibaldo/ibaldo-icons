import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarCheck: ForwardRefExoticComponent<StarCheckProps & RefAttributes<SVGSVGElement>>;

export default StarCheck;
export { StarCheck };
