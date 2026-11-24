import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinesEditCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinesEditCut: ForwardRefExoticComponent<FileLinesEditCutProps & RefAttributes<SVGSVGElement>>;

export default FileLinesEditCut;
export { FileLinesEditCut };
