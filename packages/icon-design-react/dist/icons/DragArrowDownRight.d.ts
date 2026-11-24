import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragArrowDownRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragArrowDownRight: ForwardRefExoticComponent<DragArrowDownRightProps & RefAttributes<SVGSVGElement>>;

export default DragArrowDownRight;
export { DragArrowDownRight };
