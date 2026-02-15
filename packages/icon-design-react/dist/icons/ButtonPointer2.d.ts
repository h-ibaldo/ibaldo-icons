import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonPointer2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonPointer2: ForwardRefExoticComponent<ButtonPointer2Props & RefAttributes<SVGSVGElement>>;

export default ButtonPointer2;
export { ButtonPointer2 };
