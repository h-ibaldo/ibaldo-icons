import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockDotsDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockDotsDash: ForwardRefExoticComponent<LockDotsDashProps & RefAttributes<SVGSVGElement>>;

export default LockDotsDash;
export { LockDotsDash };
