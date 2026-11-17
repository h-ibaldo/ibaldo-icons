import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeLiddedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeLidded: ForwardRefExoticComponent<EyeLiddedProps & RefAttributes<SVGSVGElement>>;

export default EyeLidded;
export { EyeLidded };
