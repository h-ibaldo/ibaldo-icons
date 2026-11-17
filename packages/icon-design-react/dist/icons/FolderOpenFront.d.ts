import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderOpenFrontProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderOpenFront: ForwardRefExoticComponent<FolderOpenFrontProps & RefAttributes<SVGSVGElement>>;

export default FolderOpenFront;
export { FolderOpenFront };
