import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveDiskMenuProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveDiskMenu: ForwardRefExoticComponent<SaveDiskMenuProps & RefAttributes<SVGSVGElement>>;

export default SaveDiskMenu;
export { SaveDiskMenu };
