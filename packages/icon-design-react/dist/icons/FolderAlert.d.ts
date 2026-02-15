import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderAlert: ForwardRefExoticComponent<FolderAlertProps & RefAttributes<SVGSVGElement>>;

export default FolderAlert;
export { FolderAlert };
