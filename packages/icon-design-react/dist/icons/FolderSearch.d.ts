import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderSearch: ForwardRefExoticComponent<FolderSearchProps & RefAttributes<SVGSVGElement>>;

export default FolderSearch;
export { FolderSearch };
