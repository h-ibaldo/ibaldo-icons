import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonCursor1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonCursor1: ForwardRefExoticComponent<ButtonCursor1Props & RefAttributes<SVGSVGElement>>;

export default ButtonCursor1;
export { ButtonCursor1 };
