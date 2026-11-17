import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonPillBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonPillBar: ForwardRefExoticComponent<ButtonPillBarProps & RefAttributes<SVGSVGElement>>;

export default ButtonPillBar;
export { ButtonPillBar };
