import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveDiskCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveDiskCheck: ForwardRefExoticComponent<SaveDiskCheckProps & RefAttributes<SVGSVGElement>>;

export default SaveDiskCheck;
export { SaveDiskCheck };
