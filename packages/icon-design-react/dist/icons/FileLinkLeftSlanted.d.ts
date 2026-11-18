import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinkLeftSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinkLeftSlanted: ForwardRefExoticComponent<FileLinkLeftSlantedProps & RefAttributes<SVGSVGElement>>;

export default FileLinkLeftSlanted;
export { FileLinkLeftSlanted };
