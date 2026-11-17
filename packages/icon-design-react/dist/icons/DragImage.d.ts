import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragImageProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragImage: ForwardRefExoticComponent<DragImageProps & RefAttributes<SVGSVGElement>>;

export default DragImage;
export { DragImage };
