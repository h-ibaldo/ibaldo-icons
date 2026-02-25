import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragAndDrop12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragAndDrop12: ForwardRefExoticComponent<DragAndDrop12Props & RefAttributes<SVGSVGElement>>;

export default DragAndDrop12;
export { DragAndDrop12 };
