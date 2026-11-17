import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveDiskCloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveDiskClose: ForwardRefExoticComponent<SaveDiskCloseProps & RefAttributes<SVGSVGElement>>;

export default SaveDiskClose;
export { SaveDiskClose };
