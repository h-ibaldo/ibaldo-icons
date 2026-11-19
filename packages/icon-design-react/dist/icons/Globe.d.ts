import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GlobeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Globe: ForwardRefExoticComponent<GlobeProps & RefAttributes<SVGSVGElement>>;

export default Globe;
export { Globe };
