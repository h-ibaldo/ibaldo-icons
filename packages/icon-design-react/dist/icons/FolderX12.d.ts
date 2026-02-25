import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderX12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderX12: ForwardRefExoticComponent<FolderX12Props & RefAttributes<SVGSVGElement>>;

export default FolderX12;
export { FolderX12 };
