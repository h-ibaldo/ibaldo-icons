import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockClose2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockClose2: ForwardRefExoticComponent<LockClose2Props & RefAttributes<SVGSVGElement>>;

export default LockClose2;
export { LockClose2 };
