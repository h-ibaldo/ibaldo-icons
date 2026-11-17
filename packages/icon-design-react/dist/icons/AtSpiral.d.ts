import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSpiralProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSpiral: ForwardRefExoticComponent<AtSpiralProps & RefAttributes<SVGSVGElement>>;

export default AtSpiral;
export { AtSpiral };
