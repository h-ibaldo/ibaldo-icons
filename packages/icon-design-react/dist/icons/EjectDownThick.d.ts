import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EjectDownThickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EjectDownThick: ForwardRefExoticComponent<EjectDownThickProps & RefAttributes<SVGSVGElement>>;

export default EjectDownThick;
export { EjectDownThick };
