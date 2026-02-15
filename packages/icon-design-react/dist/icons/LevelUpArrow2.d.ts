import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LevelUpArrow2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LevelUpArrow2: ForwardRefExoticComponent<LevelUpArrow2Props & RefAttributes<SVGSVGElement>>;

export default LevelUpArrow2;
export { LevelUpArrow2 };
