import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveDiskProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveDisk: ForwardRefExoticComponent<SaveDiskProps & RefAttributes<SVGSVGElement>>;

export default SaveDisk;
export { SaveDisk };
