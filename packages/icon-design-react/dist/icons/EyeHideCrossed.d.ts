import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeHideCrossedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeHideCrossed: ForwardRefExoticComponent<EyeHideCrossedProps & RefAttributes<SVGSVGElement>>;

export default EyeHideCrossed;
export { EyeHideCrossed };
