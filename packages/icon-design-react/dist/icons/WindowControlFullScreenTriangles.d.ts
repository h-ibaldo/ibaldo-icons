import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowControlFullScreenTrianglesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowControlFullScreenTriangles: ForwardRefExoticComponent<WindowControlFullScreenTrianglesProps & RefAttributes<SVGSVGElement>>;

export default WindowControlFullScreenTriangles;
export { WindowControlFullScreenTriangles };
