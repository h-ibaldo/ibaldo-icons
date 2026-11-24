import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinesPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinesPlain: ForwardRefExoticComponent<FileLinesPlainProps & RefAttributes<SVGSVGElement>>;

export default FileLinesPlain;
export { FileLinesPlain };
