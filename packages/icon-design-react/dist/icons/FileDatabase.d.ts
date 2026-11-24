import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileDatabaseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileDatabase: ForwardRefExoticComponent<FileDatabaseProps & RefAttributes<SVGSVGElement>>;

export default FileDatabase;
export { FileDatabase };
