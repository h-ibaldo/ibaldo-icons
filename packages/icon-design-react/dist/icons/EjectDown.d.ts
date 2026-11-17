import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EjectDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EjectDown: ForwardRefExoticComponent<EjectDownProps & RefAttributes<SVGSVGElement>>;

export default EjectDown;
export { EjectDown };
