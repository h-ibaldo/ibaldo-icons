import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveFolderDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveFolderDown: ForwardRefExoticComponent<SaveFolderDownProps & RefAttributes<SVGSVGElement>>;

export default SaveFolderDown;
export { SaveFolderDown };
