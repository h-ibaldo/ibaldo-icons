import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbShineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbShine: ForwardRefExoticComponent<LightbulbShineProps & RefAttributes<SVGSVGElement>>;

export default LightbulbShine;
export { LightbulbShine };
