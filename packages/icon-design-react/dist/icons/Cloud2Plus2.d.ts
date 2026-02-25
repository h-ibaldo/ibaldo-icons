import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2Plus2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Plus2: ForwardRefExoticComponent<Cloud2Plus2Props & RefAttributes<SVGSVGElement>>;

export default Cloud2Plus2;
export { Cloud2Plus2 };
