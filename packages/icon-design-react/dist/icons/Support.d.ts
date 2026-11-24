import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SupportProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Support: ForwardRefExoticComponent<SupportProps & RefAttributes<SVGSVGElement>>;

export default Support;
export { Support };
