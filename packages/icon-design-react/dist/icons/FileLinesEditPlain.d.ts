import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinesEditPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinesEditPlain: ForwardRefExoticComponent<FileLinesEditPlainProps & RefAttributes<SVGSVGElement>>;

export default FileLinesEditPlain;
export { FileLinesEditPlain };
