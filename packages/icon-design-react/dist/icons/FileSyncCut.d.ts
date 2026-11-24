import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileSyncCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileSyncCut: ForwardRefExoticComponent<FileSyncCutProps & RefAttributes<SVGSVGElement>>;

export default FileSyncCut;
export { FileSyncCut };
