import type { DefineComponent } from 'vue';

export interface MenuPanelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuPanel: DefineComponent<MenuPanelProps>;

export default MenuPanel;
export { MenuPanel };
