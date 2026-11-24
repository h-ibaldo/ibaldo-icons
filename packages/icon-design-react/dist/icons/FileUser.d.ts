import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileUserProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileUser: ForwardRefExoticComponent<FileUserProps & RefAttributes<SVGSVGElement>>;

export default FileUser;
export { FileUser };
