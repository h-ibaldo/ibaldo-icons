import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ComputerTowerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ComputerTower: ForwardRefExoticComponent<ComputerTowerProps & RefAttributes<SVGSVGElement>>;

export default ComputerTower;
export { ComputerTower };
