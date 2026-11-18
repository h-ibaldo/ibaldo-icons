import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMailProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMail: ForwardRefExoticComponent<FileMailProps & RefAttributes<SVGSVGElement>>;

export default FileMail;
export { FileMail };
