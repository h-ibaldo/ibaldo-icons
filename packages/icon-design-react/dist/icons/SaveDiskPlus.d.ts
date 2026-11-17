import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveDiskPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveDiskPlus: ForwardRefExoticComponent<SaveDiskPlusProps & RefAttributes<SVGSVGElement>>;

export default SaveDiskPlus;
export { SaveDiskPlus };
