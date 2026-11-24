import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Door: ForwardRefExoticComponent<DoorProps & RefAttributes<SVGSVGElement>>;

export default Door;
export { Door };
