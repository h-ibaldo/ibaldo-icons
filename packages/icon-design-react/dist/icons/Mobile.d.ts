import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Mobile: ForwardRefExoticComponent<MobileProps & RefAttributes<SVGSVGElement>>;

export default Mobile;
export { Mobile };
