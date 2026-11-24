import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileFilmCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileFilmCut: ForwardRefExoticComponent<FileFilmCutProps & RefAttributes<SVGSVGElement>>;

export default FileFilmCut;
export { FileFilmCut };
