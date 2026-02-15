import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenSpreadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenSpread: ForwardRefExoticComponent<TouchScreenSpreadProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenSpread;
export { TouchScreenSpread };
