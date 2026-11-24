import type { DefineComponent } from 'vue';

export interface StartMenuProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StartMenu: DefineComponent<StartMenuProps>;

export default StartMenu;
export { StartMenu };
