import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderWarningProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderWarning: ForwardRefExoticComponent<FolderWarningProps & RefAttributes<SVGSVGElement>>;

export default FolderWarning;
export { FolderWarning };
