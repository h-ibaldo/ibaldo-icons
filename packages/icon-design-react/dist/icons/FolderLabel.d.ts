import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderLabelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderLabel: ForwardRefExoticComponent<FolderLabelProps & RefAttributes<SVGSVGElement>>;

export default FolderLabel;
export { FolderLabel };
