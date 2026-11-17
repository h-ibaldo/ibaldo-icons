import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonCursorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonCursor: ForwardRefExoticComponent<ButtonCursorProps & RefAttributes<SVGSVGElement>>;

export default ButtonCursor;
export { ButtonCursor };
