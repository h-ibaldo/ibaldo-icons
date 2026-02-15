import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2: ForwardRefExoticComponent<Cloud2Props & RefAttributes<SVGSVGElement>>;

export default Cloud2;
export { Cloud2 };
