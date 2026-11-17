import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FontPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FontPlus: ForwardRefExoticComponent<FontPlusProps & RefAttributes<SVGSVGElement>>;

export default FontPlus;
export { FontPlus };
