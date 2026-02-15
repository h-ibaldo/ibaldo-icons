import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonCursor2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonCursor2: ForwardRefExoticComponent<ButtonCursor2Props & RefAttributes<SVGSVGElement>>;

export default ButtonCursor2;
export { ButtonCursor2 };
