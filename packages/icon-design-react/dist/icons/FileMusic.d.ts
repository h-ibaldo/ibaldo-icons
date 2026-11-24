import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMusicProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMusic: ForwardRefExoticComponent<FileMusicProps & RefAttributes<SVGSVGElement>>;

export default FileMusic;
export { FileMusic };
