import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2LinkAProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2LinkA: ForwardRefExoticComponent<Cloud2LinkAProps & RefAttributes<SVGSVGElement>>;

export default Cloud2LinkA;
export { Cloud2LinkA };
