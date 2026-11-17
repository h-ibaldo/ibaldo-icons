import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockKeyholeDotNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockKeyholeDotNarrow: ForwardRefExoticComponent<LockKeyholeDotNarrowProps & RefAttributes<SVGSVGElement>>;

export default LockKeyholeDotNarrow;
export { LockKeyholeDotNarrow };
