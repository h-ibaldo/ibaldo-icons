import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LanguageRectangle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LanguageRectangle2: ForwardRefExoticComponent<LanguageRectangle2Props & RefAttributes<SVGSVGElement>>;

export default LanguageRectangle2;
export { LanguageRectangle2 };
