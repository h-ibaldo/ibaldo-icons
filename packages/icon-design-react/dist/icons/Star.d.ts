import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Star: ForwardRefExoticComponent<StarProps & RefAttributes<SVGSVGElement>>;

export default Star;
export { Star };
