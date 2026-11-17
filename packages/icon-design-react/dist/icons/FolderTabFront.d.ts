import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderTabFrontProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderTabFront: ForwardRefExoticComponent<FolderTabFrontProps & RefAttributes<SVGSVGElement>>;

export default FolderTabFront;
export { FolderTabFront };
