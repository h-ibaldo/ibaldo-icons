import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePushpinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePushpin: ForwardRefExoticComponent<FilePushpinProps & RefAttributes<SVGSVGElement>>;

export default FilePushpin;
export { FilePushpin };
