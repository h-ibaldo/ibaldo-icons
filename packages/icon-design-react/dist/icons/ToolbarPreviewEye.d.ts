import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarPreviewEyeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarPreviewEye: ForwardRefExoticComponent<ToolbarPreviewEyeProps & RefAttributes<SVGSVGElement>>;

export default ToolbarPreviewEye;
export { ToolbarPreviewEye };
