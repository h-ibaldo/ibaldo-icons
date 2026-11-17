import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderAjarFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderAjarFlat: ForwardRefExoticComponent<FolderAjarFlatProps & RefAttributes<SVGSVGElement>>;

export default FolderAjarFlat;
export { FolderAjarFlat };
