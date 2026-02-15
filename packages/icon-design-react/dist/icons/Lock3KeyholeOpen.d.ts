import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock3KeyholeOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock3KeyholeOpen: ForwardRefExoticComponent<Lock3KeyholeOpenProps & RefAttributes<SVGSVGElement>>;

export default Lock3KeyholeOpen;
export { Lock3KeyholeOpen };
