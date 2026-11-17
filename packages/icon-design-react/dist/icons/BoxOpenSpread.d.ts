import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxOpenSpreadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxOpenSpread: ForwardRefExoticComponent<BoxOpenSpreadProps & RefAttributes<SVGSVGElement>>;

export default BoxOpenSpread;
export { BoxOpenSpread };
