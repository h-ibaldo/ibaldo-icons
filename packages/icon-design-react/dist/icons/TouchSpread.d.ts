import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSpreadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSpread: ForwardRefExoticComponent<TouchSpreadProps & RefAttributes<SVGSVGElement>>;

export default TouchSpread;
export { TouchSpread };
