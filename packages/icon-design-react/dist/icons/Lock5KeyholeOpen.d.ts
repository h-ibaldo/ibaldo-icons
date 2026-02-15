import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock5KeyholeOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock5KeyholeOpen: ForwardRefExoticComponent<Lock5KeyholeOpenProps & RefAttributes<SVGSVGElement>>;

export default Lock5KeyholeOpen;
export { Lock5KeyholeOpen };
