import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanCircle: ForwardRefExoticComponent<BanCircleProps & RefAttributes<SVGSVGElement>>;

export default BanCircle;
export { BanCircle };
