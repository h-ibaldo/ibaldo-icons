import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeCheckPetalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeCheckPetal: ForwardRefExoticComponent<BadgeCheckPetalProps & RefAttributes<SVGSVGElement>>;

export default BadgeCheckPetal;
export { BadgeCheckPetal };
