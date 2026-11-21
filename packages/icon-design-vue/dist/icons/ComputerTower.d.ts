import type { DefineComponent } from 'vue';

export interface ComputerTowerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ComputerTower: DefineComponent<ComputerTowerProps>;

export default ComputerTower;
export { ComputerTower };
