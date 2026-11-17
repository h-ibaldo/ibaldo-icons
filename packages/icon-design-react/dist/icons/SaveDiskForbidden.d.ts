import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveDiskForbiddenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveDiskForbidden: ForwardRefExoticComponent<SaveDiskForbiddenProps & RefAttributes<SVGSVGElement>>;

export default SaveDiskForbidden;
export { SaveDiskForbidden };
