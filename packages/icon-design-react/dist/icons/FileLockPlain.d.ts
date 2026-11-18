import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLockPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLockPlain: ForwardRefExoticComponent<FileLockPlainProps & RefAttributes<SVGSVGElement>>;

export default FileLockPlain;
export { FileLockPlain };
