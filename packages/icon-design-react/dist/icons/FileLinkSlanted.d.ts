import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinkSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinkSlanted: ForwardRefExoticComponent<FileLinkSlantedProps & RefAttributes<SVGSVGElement>>;

export default FileLinkSlanted;
export { FileLinkSlanted };
