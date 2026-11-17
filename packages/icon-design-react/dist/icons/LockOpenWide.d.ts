import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockOpenWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockOpenWide: ForwardRefExoticComponent<LockOpenWideProps & RefAttributes<SVGSVGElement>>;

export default LockOpenWide;
export { LockOpenWide };
