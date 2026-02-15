import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock2KeyholeOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock2KeyholeOpen: ForwardRefExoticComponent<Lock2KeyholeOpenProps & RefAttributes<SVGSVGElement>>;

export default Lock2KeyholeOpen;
export { Lock2KeyholeOpen };
