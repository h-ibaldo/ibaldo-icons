import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockDotsWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockDotsWide: ForwardRefExoticComponent<LockDotsWideProps & RefAttributes<SVGSVGElement>>;

export default LockDotsWide;
export { LockDotsWide };
