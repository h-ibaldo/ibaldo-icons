import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockCheckWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockCheckWide: ForwardRefExoticComponent<LockCheckWideProps & RefAttributes<SVGSVGElement>>;

export default LockCheckWide;
export { LockCheckWide };
