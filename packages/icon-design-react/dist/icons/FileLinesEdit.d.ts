import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinesEditProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinesEdit: ForwardRefExoticComponent<FileLinesEditProps & RefAttributes<SVGSVGElement>>;

export default FileLinesEdit;
export { FileLinesEdit };
