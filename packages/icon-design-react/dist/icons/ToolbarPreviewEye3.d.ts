import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarPreviewEye3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarPreviewEye3: ForwardRefExoticComponent<ToolbarPreviewEye3Props & RefAttributes<SVGSVGElement>>;

export default ToolbarPreviewEye3;
export { ToolbarPreviewEye3 };
