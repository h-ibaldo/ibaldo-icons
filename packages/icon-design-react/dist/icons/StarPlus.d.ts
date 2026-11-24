import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarPlus: ForwardRefExoticComponent<StarPlusProps & RefAttributes<SVGSVGElement>>;

export default StarPlus;
export { StarPlus };
