import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonPillCursorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonPillCursor: ForwardRefExoticComponent<ButtonPillCursorProps & RefAttributes<SVGSVGElement>>;

export default ButtonPillCursor;
export { ButtonPillCursor };
