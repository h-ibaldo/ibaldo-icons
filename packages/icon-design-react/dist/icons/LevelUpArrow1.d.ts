import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LevelUpArrow1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LevelUpArrow1: ForwardRefExoticComponent<LevelUpArrow1Props & RefAttributes<SVGSVGElement>>;

export default LevelUpArrow1;
export { LevelUpArrow1 };
