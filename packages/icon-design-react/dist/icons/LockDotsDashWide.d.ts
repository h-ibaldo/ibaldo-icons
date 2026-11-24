import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockDotsDashWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockDotsDashWide: ForwardRefExoticComponent<LockDotsDashWideProps & RefAttributes<SVGSVGElement>>;

export default LockDotsDashWide;
export { LockDotsDashWide };
