import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockEyeWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockEyeWide: ForwardRefExoticComponent<LockEyeWideProps & RefAttributes<SVGSVGElement>>;

export default LockEyeWide;
export { LockEyeWide };
