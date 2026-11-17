import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarStriped: ForwardRefExoticComponent<StarStripedProps & RefAttributes<SVGSVGElement>>;

export default StarStriped;
export { StarStriped };
