import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackLockDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackLockDashed: ForwardRefExoticComponent<SquareStackLockDashedProps & RefAttributes<SVGSVGElement>>;

export default SquareStackLockDashed;
export { SquareStackLockDashed };
