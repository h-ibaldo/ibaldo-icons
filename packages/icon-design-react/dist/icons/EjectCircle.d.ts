import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EjectCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EjectCircle: ForwardRefExoticComponent<EjectCircleProps & RefAttributes<SVGSVGElement>>;

export default EjectCircle;
export { EjectCircle };
