import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLockCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLockCut: ForwardRefExoticComponent<FileLockCutProps & RefAttributes<SVGSVGElement>>;

export default FileLockCut;
export { FileLockCut };
