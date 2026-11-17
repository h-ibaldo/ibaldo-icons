import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveDiskAddProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveDiskAdd: ForwardRefExoticComponent<SaveDiskAddProps & RefAttributes<SVGSVGElement>>;

export default SaveDiskAdd;
export { SaveDiskAdd };
