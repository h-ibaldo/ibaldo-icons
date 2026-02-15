import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchThreePositionsFirstProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchThreePositionsFirst: ForwardRefExoticComponent<SwitchThreePositionsFirstProps & RefAttributes<SVGSVGElement>>;

export default SwitchThreePositionsFirst;
export { SwitchThreePositionsFirst };
