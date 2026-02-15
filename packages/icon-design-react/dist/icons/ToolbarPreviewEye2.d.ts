import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarPreviewEye2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarPreviewEye2: ForwardRefExoticComponent<ToolbarPreviewEye2Props & RefAttributes<SVGSVGElement>>;

export default ToolbarPreviewEye2;
export { ToolbarPreviewEye2 };
