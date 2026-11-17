import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const At: ForwardRefExoticComponent<AtProps & RefAttributes<SVGSVGElement>>;

export default At;
export { At };
