import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LevelUpArrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LevelUpArrow: ForwardRefExoticComponent<LevelUpArrowProps & RefAttributes<SVGSVGElement>>;

export default LevelUpArrow;
export { LevelUpArrow };
