import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EjectProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Eject: ForwardRefExoticComponent<EjectProps & RefAttributes<SVGSVGElement>>;

export default Eject;
export { Eject };
