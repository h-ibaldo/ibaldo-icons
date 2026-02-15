import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonBubble2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonBubble2: ForwardRefExoticComponent<ButtonBubble2Props & RefAttributes<SVGSVGElement>>;

export default ButtonBubble2;
export { ButtonBubble2 };
