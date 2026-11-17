import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveDiskRemoveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveDiskRemove: ForwardRefExoticComponent<SaveDiskRemoveProps & RefAttributes<SVGSVGElement>>;

export default SaveDiskRemove;
export { SaveDiskRemove };
