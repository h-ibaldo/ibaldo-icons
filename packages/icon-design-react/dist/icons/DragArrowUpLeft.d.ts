import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragArrowUpLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragArrowUpLeft: ForwardRefExoticComponent<DragArrowUpLeftProps & RefAttributes<SVGSVGElement>>;

export default DragArrowUpLeft;
export { DragArrowUpLeft };
