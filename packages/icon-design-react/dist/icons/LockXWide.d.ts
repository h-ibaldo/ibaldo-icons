import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockXWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockXWide: ForwardRefExoticComponent<LockXWideProps & RefAttributes<SVGSVGElement>>;

export default LockXWide;
export { LockXWide };
