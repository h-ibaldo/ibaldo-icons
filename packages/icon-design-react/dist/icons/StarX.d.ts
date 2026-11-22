import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarX: ForwardRefExoticComponent<StarXProps & RefAttributes<SVGSVGElement>>;

export default StarX;
export { StarX };
