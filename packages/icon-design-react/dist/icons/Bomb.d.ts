import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BombProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bomb: ForwardRefExoticComponent<BombProps & RefAttributes<SVGSVGElement>>;

export default Bomb;
export { Bomb };
