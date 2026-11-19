import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLock: ForwardRefExoticComponent<FileLockProps & RefAttributes<SVGSVGElement>>;

export default FileLock;
export { FileLock };
