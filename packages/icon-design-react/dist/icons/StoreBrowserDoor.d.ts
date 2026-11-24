import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StoreBrowserDoorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StoreBrowserDoor: ForwardRefExoticComponent<StoreBrowserDoorProps & RefAttributes<SVGSVGElement>>;

export default StoreBrowserDoor;
export { StoreBrowserDoor };
