import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinesSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinesSearch: ForwardRefExoticComponent<FileLinesSearchProps & RefAttributes<SVGSVGElement>>;

export default FileLinesSearch;
export { FileLinesSearch };
