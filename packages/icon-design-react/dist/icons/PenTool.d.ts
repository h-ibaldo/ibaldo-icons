import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PenToolProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PenTool: ForwardRefExoticComponent<PenToolProps & RefAttributes<SVGSVGElement>>;

export default PenTool;
export { PenTool };
