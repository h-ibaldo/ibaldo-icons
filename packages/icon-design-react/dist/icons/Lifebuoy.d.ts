import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LifebuoyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lifebuoy: ForwardRefExoticComponent<LifebuoyProps & RefAttributes<SVGSVGElement>>;

export default Lifebuoy;
export { Lifebuoy };
