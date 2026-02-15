import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2Music2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Music2: ForwardRefExoticComponent<Cloud2Music2Props & RefAttributes<SVGSVGElement>>;

export default Cloud2Music2;
export { Cloud2Music2 };
