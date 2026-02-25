import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderCheck2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderCheck2: ForwardRefExoticComponent<FolderCheck2Props & RefAttributes<SVGSVGElement>>;

export default FolderCheck2;
export { FolderCheck2 };
