import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonLined2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonLined2: ForwardRefExoticComponent<ButtonLined2Props & RefAttributes<SVGSVGElement>>;

export default ButtonLined2;
export { ButtonLined2 };
