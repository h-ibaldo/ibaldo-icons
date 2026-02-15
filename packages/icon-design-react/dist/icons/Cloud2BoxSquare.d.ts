import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2BoxSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2BoxSquare: ForwardRefExoticComponent<Cloud2BoxSquareProps & RefAttributes<SVGSVGElement>>;

export default Cloud2BoxSquare;
export { Cloud2BoxSquare };
