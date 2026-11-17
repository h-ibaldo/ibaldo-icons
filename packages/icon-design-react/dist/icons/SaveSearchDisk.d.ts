import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveSearchDiskProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveSearchDisk: ForwardRefExoticComponent<SaveSearchDiskProps & RefAttributes<SVGSVGElement>>;

export default SaveSearchDisk;
export { SaveSearchDisk };
