import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SelfieButtonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SelfieButton: ForwardRefExoticComponent<SelfieButtonProps & RefAttributes<SVGSVGElement>>;

export default SelfieButton;
export { SelfieButton };
