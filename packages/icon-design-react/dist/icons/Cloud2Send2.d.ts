import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2Send2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Send2: ForwardRefExoticComponent<Cloud2Send2Props & RefAttributes<SVGSVGElement>>;

export default Cloud2Send2;
export { Cloud2Send2 };
