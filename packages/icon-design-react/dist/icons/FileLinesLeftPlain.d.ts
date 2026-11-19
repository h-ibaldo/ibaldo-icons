import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinesLeftPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinesLeftPlain: ForwardRefExoticComponent<FileLinesLeftPlainProps & RefAttributes<SVGSVGElement>>;

export default FileLinesLeftPlain;
export { FileLinesLeftPlain };
