import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragAndDrop3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragAndDrop3: ForwardRefExoticComponent<DragAndDrop3Props & RefAttributes<SVGSVGElement>>;

export default DragAndDrop3;
export { DragAndDrop3 };
