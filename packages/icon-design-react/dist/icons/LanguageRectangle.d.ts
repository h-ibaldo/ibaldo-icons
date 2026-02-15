import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LanguageRectangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LanguageRectangle: ForwardRefExoticComponent<LanguageRectangleProps & RefAttributes<SVGSVGElement>>;

export default LanguageRectangle;
export { LanguageRectangle };
