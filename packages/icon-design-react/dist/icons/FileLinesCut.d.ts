import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinesCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinesCut: ForwardRefExoticComponent<FileLinesCutProps & RefAttributes<SVGSVGElement>>;

export default FileLinesCut;
export { FileLinesCut };
