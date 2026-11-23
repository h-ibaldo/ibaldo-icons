import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LassoWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LassoWide: ForwardRefExoticComponent<LassoWideProps & RefAttributes<SVGSVGElement>>;

export default LassoWide;
export { LassoWide };
