import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EjectDownCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EjectDownCircle: ForwardRefExoticComponent<EjectDownCircleProps & RefAttributes<SVGSVGElement>>;

export default EjectDownCircle;
export { EjectDownCircle };
