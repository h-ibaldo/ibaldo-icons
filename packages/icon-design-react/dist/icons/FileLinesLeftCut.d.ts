import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinesLeftCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinesLeftCut: ForwardRefExoticComponent<FileLinesLeftCutProps & RefAttributes<SVGSVGElement>>;

export default FileLinesLeftCut;
export { FileLinesLeftCut };
