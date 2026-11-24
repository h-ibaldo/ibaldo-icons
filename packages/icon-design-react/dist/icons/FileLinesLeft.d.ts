import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinesLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinesLeft: ForwardRefExoticComponent<FileLinesLeftProps & RefAttributes<SVGSVGElement>>;

export default FileLinesLeft;
export { FileLinesLeft };
