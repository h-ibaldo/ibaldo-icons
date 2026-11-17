import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchThreePositionsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchThreePositions: ForwardRefExoticComponent<SwitchThreePositionsProps & RefAttributes<SVGSVGElement>>;

export default SwitchThreePositions;
export { SwitchThreePositions };
