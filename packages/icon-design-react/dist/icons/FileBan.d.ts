import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileBanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileBan: ForwardRefExoticComponent<FileBanProps & RefAttributes<SVGSVGElement>>;

export default FileBan;
export { FileBan };
