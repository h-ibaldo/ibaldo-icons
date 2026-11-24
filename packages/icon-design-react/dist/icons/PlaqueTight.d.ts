import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlaqueTightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlaqueTight: ForwardRefExoticComponent<PlaqueTightProps & RefAttributes<SVGSVGElement>>;

export default PlaqueTight;
export { PlaqueTight };
