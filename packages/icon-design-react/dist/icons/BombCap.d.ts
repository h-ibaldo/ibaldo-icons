import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BombCapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BombCap: ForwardRefExoticComponent<BombCapProps & RefAttributes<SVGSVGElement>>;

export default BombCap;
export { BombCap };
