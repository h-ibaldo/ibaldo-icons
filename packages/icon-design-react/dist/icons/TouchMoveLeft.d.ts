import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchMoveLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchMoveLeft: ForwardRefExoticComponent<TouchMoveLeftProps & RefAttributes<SVGSVGElement>>;

export default TouchMoveLeft;
export { TouchMoveLeft };
