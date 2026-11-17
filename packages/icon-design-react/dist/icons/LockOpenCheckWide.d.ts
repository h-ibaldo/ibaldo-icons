import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockOpenCheckWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockOpenCheckWide: ForwardRefExoticComponent<LockOpenCheckWideProps & RefAttributes<SVGSVGElement>>;

export default LockOpenCheckWide;
export { LockOpenCheckWide };
