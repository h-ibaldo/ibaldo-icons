import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Ban: ForwardRefExoticComponent<BanProps & RefAttributes<SVGSVGElement>>;

export default Ban;
export { Ban };
