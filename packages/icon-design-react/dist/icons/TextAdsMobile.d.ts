import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAdsMobileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAdsMobile: ForwardRefExoticComponent<TextAdsMobileProps & RefAttributes<SVGSVGElement>>;

export default TextAdsMobile;
export { TextAdsMobile };
