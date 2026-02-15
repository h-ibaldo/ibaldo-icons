import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonPointerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonPointer: ForwardRefExoticComponent<ButtonPointerProps & RefAttributes<SVGSVGElement>>;

export default ButtonPointer;
export { ButtonPointer };
