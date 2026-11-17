import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveDiskDeleteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveDiskDelete: ForwardRefExoticComponent<SaveDiskDeleteProps & RefAttributes<SVGSVGElement>>;

export default SaveDiskDelete;
export { SaveDiskDelete };
