import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileFilmProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileFilm: ForwardRefExoticComponent<FileFilmProps & RefAttributes<SVGSVGElement>>;

export default FileFilm;
export { FileFilm };
