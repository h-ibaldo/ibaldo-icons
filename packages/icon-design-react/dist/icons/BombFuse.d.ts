import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BombFuseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BombFuse: ForwardRefExoticComponent<BombFuseProps & RefAttributes<SVGSVGElement>>;

export default BombFuse;
export { BombFuse };
