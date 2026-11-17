import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonPillHandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonPillHand: ForwardRefExoticComponent<ButtonPillHandProps & RefAttributes<SVGSVGElement>>;

export default ButtonPillHand;
export { ButtonPillHand };
