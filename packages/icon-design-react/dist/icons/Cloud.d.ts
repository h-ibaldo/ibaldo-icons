import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud: ForwardRefExoticComponent<CloudProps & RefAttributes<SVGSVGElement>>;

export default Cloud;
export { Cloud };
